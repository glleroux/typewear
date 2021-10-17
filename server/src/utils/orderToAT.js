//ADD TO AIRTABLE
const sendOrderToAirtable = async (order) => {
    const shippingAddress = `${order.info.address}, ${order.info.city}, ${order.info.state}, ${order.info.zip}`
    
    await axios.post(`https://api.airtable.com/v0/app6svFgRrfkw1py9/Orders`, {
    "fields": {
        "Name": order.info.name,
        "Email": order.info.email,
        "Font": order.font,
        "Size": order.size,
        "Address": shippingAddress
    }
    }, {
    headers: {
      'Authorization': "Bearer key8WopV2OEIOtCou"
    }
  })

}

module.exports = sendOrderToAirtable