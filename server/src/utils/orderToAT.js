//ADD TO AIRTABLE
const sendOrderToAirtable = async (order) => {
    
    await axios.post(`https://api.airtable.com/v0/app6svFgRrfkw1py9/Orders`, {
    "fields": {
        "Name": order.name,
        "Email": order.email,
        "Font": order.font,
        "Size": order.size,
        "Address": order.shippingAddress
    }
    }, {
    headers: {
      'Authorization': "Bearer key8WopV2OEIOtCou"
    }
  })

}

module.exports = sendOrderToAirtable