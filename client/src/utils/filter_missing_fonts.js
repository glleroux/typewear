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

    let CSSFilteredResult = []
    for (let i=0; i<boolArray.length; i++) {
        if (boolArray[i]) {
            CSSFilteredResult.push(arr[i])
        }
    }

    const manualExclusionList = ['Diplomata', 'Diplomata SC']
    const manualFilteredResult = CSSFilteredResult.filter(fontFamily => !manualExclusionList.includes(fontFamily.id))

    console.log('one: ', CSSFilteredResult.length)
    console.log(CSSFilteredResult.includes('Diplomata'))
    console.log('two: ', manualFilteredResult.length)

    return CSSFilteredResult
}

export default filterFontFamilies