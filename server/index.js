const express = require("express");
const app = express();
require("dotenv").config();
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
  console.log('works')
  console.log(req.body)

  try {
    let response = await axios.post(`https://api.printful.com/orders`, {
      "recipient": {
        "name": "Rory",
        "address1": "Jordan",
        "city": "Duckitt",
        "state_code": "MN",
        "country_code": "GB",
        "zip": "20020"
      },
      "items": [
        {
          "variant_id": 11867,
          "quantity": 1,
          "files": [
            {
              "url": "https://picsum.photos/201"
            }
          ]
        }
      ]
    }, {
      headers: {
        "Authorization": "Basic N2lkOTFuYnItbTlkZC1lM3RvOjBidmcteGMzOWU4OXUybG85"
      }
    })
    console.log('this is the', response)
    } catch (err) {
      console.log(err)
    }
    console.log('order sent')
    res.json('yes')
})


// const sendOrder = async order => {

//   const {font, size} = order
//   const {name, email, address, city, state, zip} = order.info
//   const shippingAddress = `${address}, ${city}, ${state}, ${zip}` 


//   console.log('sent order ', order)
// }

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log("Server started...");
  console.log('running on port', PORT)
});





// {
//   "recipient": {
//       "name": name,
//       "address1": address,
//       "city": city,
//       "state_code": state,
//       "country_code": "GB",
//       "zip": zip
//   },
//   "items": [
//       {
//           "variant_id": 11865,
//           "quantity": 1,
//           "files": [
//               {
//                   "url": "https://picsum.photos/200"
//               }
//           ]
//       }
//   ]
// }


