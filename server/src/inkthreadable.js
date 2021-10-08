axios = require('axios')
require("dotenv").config({path:`${__dirname}/../.env`});

APP_ID = process.env.INKT_APP_ID
SECRET_KEY = process.env.INKT_SECRET_KEY

const sha1 = str => {
    const crypto = require('crypto')
    const shasum = crypto.createHash('sha1')
    shasum.update(str)

    return shasum.digest('hex')
}


const createOrder = async (order) => {
    const req = await axios.post('https://www.inkthreadable.co.uk/api/orders.php', order, {
        params: {
            AppId: APP_ID,
            Signature: sha1(`${JSON.stringify(order)}${SECRET_KEY}`)
        }
    })

    console.log(req.data)
}

const getOrders = async () => {
    const req = await axios.get('https://www.inkthreadable.co.uk/api/orders.php', {
        params: {
            AppId: APP_ID,
            Signature: sha1(`AppId=${APP_ID}${SECRET_KEY}`)
        }
    })

    console.log(req.data)
}


const order = {
    "brandName": "typewear",
    "comment": "rb test order.",
    "shipping_address": {
     "firstName": "Alex",
     "lastName": "Cunliffe",
     "company": "Inkthreadable",
     "address1": "Unit 501a",
     "address2": "Glenfield Park Two",
     "city": "Blackburn",
     "county": "Lancashire",
     "postcode": "BB1 5QH",
     "country": "United Kingdom",
     "phone1": "+44 (0)1254 777070",
    },
    "shipping": {
     "shippingMethod": "courier"
    },
    "items": [
     {
      "pn": "JH001",
      "quantity": 4,
      "retailPrice": 20,
      "description": "Please print as large as posible",
      "designs": {
       "front": "http://animalfair.com/wp-content/uploads/2014/06/little_cute_cat_1920x1080.jpg",
       "back": "http://data3.whicdn.com/images/168204223/large.jpg"
      }
     }
    ]
   }

// getOrders()
createOrder(order)

module.exports = createOrder