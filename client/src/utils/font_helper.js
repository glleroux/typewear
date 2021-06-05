const textToImage = require('text-to-image');

const getName = (font) => {
    const name = ["font-"]
    name.push(font.toLowerCase().replace(/ /g, '-'))
    return name.join('')
}

export { getName }