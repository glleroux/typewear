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


const createOrder = async (order, printFileURL) => {

    const {font, size, name, address, city, state, zip, firstName, lastName} = order

    const inktOrder = {
        "brandName": "typewear",
        "shipping_address": {
         "firstName": firstName,
         "lastName": lastName,
         "address1": address,
         "city": city,
         "county": state,
         "postcode": zip,
         "country": "France" //need to sort
        },
        "shipping": {
            "shippingMethod": "regular" //hard //need to switch this for US
        },
        "items": [
            {
                "pn": `EMB-STTU788-WHI-${size}`, 
                "title": font,
                "quantity": 1,
                "retailPrice": 29, 
                "designs": {
                    "front": printFileURL
                }
            }
        ]
    }

    const req = await axios.post('https://www.inkthreadable.co.uk/api/orders.php', inktOrder, {
        params: {
            AppId: APP_ID,
            Signature: sha1(`${JSON.stringify(inktOrder)}${SECRET_KEY}`)
        }
    })

    console.log(req.data)
    console.log(req.data.order.items)

    return req.data.order.id
}

const getOrders = async () => {
    const req = await axios.get('https://www.inkthreadable.co.uk/api/orders.php', {
        params: {
            AppId: 'APP-00205121',
            Signature: sha1(`AppId=${APP_ID}${SECRET_KEY}`)
        }
    })

    console.log(req.data)
    console.log(req.data.orders[0])
}

module.exports = createOrder