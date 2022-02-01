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
const chalk = require('chalk');

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
      currency: "GBP",
      description: "typewear",
      payment_method: id,
      confirm: true,
    });
    console.log("stripe-routes.js 19 | payment", payment);
    console.log('\n',chalk.green('Payment successful'))
    res.json({
      message: "Payment Successful",
      success: true,
    });
  } catch (error) {
    console.log("stripe-routes.js 17 | error", error);
    console.log('\n',chalk.red('Payment failed'))
    res.json({
      message: "Payment Failed",
      success: false,
    });
  }
});

app.post("/order", async (req, res) => {
  console.log(req.body)
  const order = req.body

  console.log('\n',chalk.blue('Creating new customer order:...'),'\n',order)
  
  let printFileURL;
  const existingCloudinaryURL = await searchCloudinary(order.font)

  if (existingCloudinaryURL) {
    printFileURL = existingCloudinaryURL
    console.log(`${order.font} print file already exists.`)
  } else {
    console.log(`${order.font} print file required...`)
    printFileURL = await getCloudinaryURL(order.font)
    console.log(`${order.font} print file created.`)
  }

  //SEND TO FULFILMENT
  console.log(`Submitting order details to fulfillment...`)
    try {
    const orderId = await sendOrder(order, printFileURL)
    console.log('Order submitted successfully. Inkthreadable order ID:', chalk.blue(orderId))
    res.json('order submitted')  
  } catch (error) {
    console.log('Unsuccessful. Error:')
    console.log(error.data)
  }
})

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log("Server started...");
  console.log('running on port', PORT)
});


