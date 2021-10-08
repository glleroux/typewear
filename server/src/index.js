const createPrintFile = require('./createPrintFile') //deprecated
const getCloudinaryURL = require('./getCloudinaryURL')
const createOrder = require('./inkthreadable')
const express = require("express");
const app = express();
require("dotenv").config({path:`${__dirname}/../.env`});
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST);
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require('axios');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.post("/payment", cors(), async (req, res) => {
  console.log("stripe-routes.js 9 | route reached", req.body);
  let { amount, id } = req.body;
  console.log("stripe-routes.js 10 | amount and id", amount, id);
  try {
    const payment = await stripe.paymentIntents.create({
      amount: amount,
      currency: "USD",
      description: "Your Company Description",
      payment_method: id,
      confirm: true,
    });
    console.log("stripe-routes.js 19 | payment", payment);
    res.json({
      message: "Payment Successful",
      success: true,
    });
  } catch (error) {
    console.log("stripe-routes.js 17 | error", error);
    res.json({
      message: "Payment Failed",
      success: false,
    });
  }
});

app.post("/order", async (req, res) => {
  console.log(req.body)
  const order = req.body

  const {font, size} = order

  const {name, email, address, city, state, zip} = order.info
  const shippingAddress = `${address}, ${city}, ${state}, ${zip}` 


  //if font has not been ordered before, create new set of products with new printfile
  //TODO

  //if font is new

  //ADD TO AIRTABLE
  await axios.post(`https://api.airtable.com/v0/app6svFgRrfkw1py9/Orders`, {
    "fields": {
        "Name": name,
        "Email": email,
        "Font": font,
        "Size": size,
        "Address": shippingAddress
    }
  }, {
    headers: {
      'Authorization': "Bearer key8WopV2OEIOtCou"
    }
  })

  //SEND TO FULFILMENT
  try {
    const printFileURL = await getCloudinaryURL(font) //generate printfile, upload to cloudinary and get URL
    let response = await axios.post(`https://api.printful.com/orders`, {
      "recipient": {
              "name": name,
              "address1": address,
              "city": city,
              "state_code": state,
              "country_code": "GB",
              "zip": zip
          },
      "items": [
        {
          "variant_id": 11864,
          "files": [
              {
                  "type": "embroidery_chest_center",
                  "url": printFileURL
              }
          ],
          "options": [
              {
                  "id": "embroidery_type",
                  "value": "flat"
              },
              {
                  "id": "thread_colors",
                  "value": [
                      "#CC3333"
                  ]
              },
              {
                  "id": "thread_colors_chest_center",
                  "value": [
                      "#CC3333"
                  ]
              }
          ]
      }
      ]
    }, {
      headers: {
        "Authorization": "Basic N2lkOTFuYnItbTlkZC1lM3RvOjBidmcteGMzOWU4OXUybG85"
      }
    })

    console.log('code: ', response.data.code)
    console.log('order sent: ', response.data.result.dashboard_url)
    res.json('order submitted')
    } catch (err) {
      console.log(err.data)
    }
})

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log("Server started...");
  console.log('running on port', PORT)
});


