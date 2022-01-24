const parseOrder = (order) => {
    const {font, size} = order
    const {name, email, address, city, state, zip} = order.info
    const shippingAddress = `${address}, ${city}, ${state}, ${zip}`
    const firstName = name.split(' ')[0]
    const lastName = name.split(' ')[1]

    const parsed = {
        font,
        size,
        name,
        email,
        address,
        city,
        state,
        zip,
        shippingAddress,
        firstName,
        lastName
    }

    return parsed
}

module.exports = parseOrder