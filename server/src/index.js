const searchCloudinary = require('./utils/searchCloudinary')
const getCloudinaryURL = require('./getCloudinaryURL')
const sendOrder = require('./utils/sendOrder')
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

app.get("/test", (req, res) => {
  console.log('test route GET')
  console.log(req)
  res.json('Hello World!')
})

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
  
  let printFileURL;
  const existingCloudinaryURL = await searchCloudinary(order.font)

  if (existingCloudinaryURL) {
    printFileURL = existingCloudinaryURL
    console.log('print file already exists')
  } else {
    console.log('new print file required')
    printFileURL = await getCloudinaryURL(order.font)
    console.log('new print file created')
  }

  //SEND TO FULFILMENT
    try {
    const orderId = await sendOrder(order, printFileURL)
    console.log(orderId)
    res.json('order submitted')  
  } catch (error) {
    console.log(error.data)
  }
})

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log("Server started...");
  console.log('running on port', PORT)
});


