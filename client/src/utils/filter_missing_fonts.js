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

    let name = arr.length > 200 ? 'all' : 'common'

    const cssFile = await getCSSFile()
    const boolArray = await Promise.all(arr.map(fontFamily => fontIsFoundInCSSFile(fontFamily, cssFile)))

    let filteredByCSS = []
    for (let i=0; i<boolArray.length; i++) {
        if (boolArray[i]) {
            filteredByCSS.push(arr[i])
        }
    }

    const manualExclusionList = [
        'Diplomata', 
        'Diplomata SC', 
        'Syncopate',
        'Butcherman',
        'Medievalsharp',
        'Metamorphous',
        'Shojumaru',
        'Suwannaphum',
        'UnifrakturMaguntia',
        'UnifrakturCook',
        'Libre Barcode 128 Text',
        'Libre Barcode 39',
        'Libre Barcode 39 Text',
        'Libre Barcode 39 Extended',
        'Libre Barcode 39 Extended Text',
        'Stanlinist One',
        'Nokora',
        'Content',
    ]

    const result = filteredByCSS.filter(fontFamily => !manualExclusionList.includes(fontFamily))

    return result
}

export default filterFontFamilies