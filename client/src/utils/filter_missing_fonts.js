const axios = require('axios')
require('dotenv').config()

const getCSSFile = async () => {
    try {
        const response = await axios.get('https://pagecdn.io/lib/easyfonts/fonts.css')
        const cssFile = response.data
        return cssFile
    } catch (error) {
        console.log(error)   
    }
}

const fontIsFoundInCSSFile = async (fontFamily, cssFile) => {
    try {
        const fontFamilyLower = fontFamily.toLowerCase()
        const regex = new RegExp(`${fontFamilyLower}`, 'i')
        return regex.test(cssFile)
    } catch (error) {
        console.log(error)   
    }
}

const filterFontFamilies = async (arr) => {
    const cssFile = await getCSSFile()
    const boolArray = await Promise.all(arr.map(fontFamily => fontIsFoundInCSSFile(fontFamily, cssFile)))

    let result = []
    for (let i=0; i<boolArray.length; i++) {
        if (boolArray[i]) {
            result.push(arr[i])
        }
    }
    return result
}

export default filterFontFamilies