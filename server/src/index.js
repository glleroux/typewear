const searchCloudinary = require('./utils/searchCloudinary')
const getCloudinaryURL = require('./getCloudinaryURL')
const sendOrder = require('./utils/sendOrder')
const express = require("express");
const app = express();
require("dotenv").config({path:`${__dirname}/../.env`});
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST);
const bodyParser = require("body-parser");
const cors = require("cors");
const chalk = require('chalk');
const nodemailer = require('nodemailer')
const getEmailHTML = require('./utils/getEmailHTML')
const dayjs = require('dayjs');
const dayjsBusinessTime = require('dayjs-business-time');
dayjs.extend(dayjsBusinessTime);

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

  let orderId = null

  //SEND TO FULFILMENT
  console.log(`Submitting order details to fulfillment...`)
    try {
    orderId = await sendOrder(order, printFileURL)
    console.log('Order submitted successfully. Inkthreadable order ID:', chalk.blue(orderId))
    res.json('order submitted')  
  } catch (error) {
    console.log('Unsuccessful. Error:')
    console.log(error.data)
  }

  //SEND CONFIRMATION EMAIL
  if (orderId) {
    console.log(`Sending confirmation email to customer...`)
    
    const day = dayjs();
    const timeToAdd = 10;
    const deliveryDate = day.addBusinessDays(timeToAdd).format('DD-MMM');

    const html = getEmailHTML(orderId, order, deliveryDate)
    const to = order.info.email
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS    
      }
    })
    
    try {
      await transporter.sendMail({
        from: process.env.MAIL_FROM,
        to: order.info.email, 
        subject: `typewear: order ${orderId} confirmed`,
        html
      }, (err, info) => {
        if (err) {
          console.log(err)
        } else {
          console.log(`Confirmation email sent to ${chalk.blue(to)} successfully`)
          console.log(info)
          res.json('success')
        }
      })
  
    } catch (error) {
      console.log(error)
    }
  } else {
    console.log(`Error with fulfillment. Confirmation email not sent.`)
  }
})

app.post('/send_email', cors(), async(req, res) => {
  

})

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log("Server started...");
  console.log('running on port', PORT)
});


