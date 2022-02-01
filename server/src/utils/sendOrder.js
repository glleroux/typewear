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


const sendOrder = async (order, printFileURL) => {
    const {font, size } = order
    const {name, address1, address2, city, county, postcode, country} = order.info

    const firstName = name.split(' ')[0]
    const lastName = name.split(' ')[1]

    const inktOrder = {
        "brandName": "typewear",
        "shipping_address": {
         firstName: firstName,
         lastName: lastName,
         address1: address1,
         address2: address2,
         city: city,
         county: county,
         postcode: postcode,
         country: country
        },
        "shipping": {
            "shippingMethod": "regular"
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

    return req.data.order.id
}

module.exports = sendOrder