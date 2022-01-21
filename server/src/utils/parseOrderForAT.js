const parseOrderForAT = (order) => {
    const {font, size} = order
    const {name, email, address, city, state, zip} = order.info
    const firstName = name.split(' ')[0]
    const lastName = name.split(' ')[1]

    const parsed = {
        font,
        size,
        name,
        email,
        address1,
        address2,
        city,
        county,
        postcode,
        firstName,
        lastName
    }

    return parsed
}

module.exports = parseOrderForAT