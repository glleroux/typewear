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

    //Length when unfiltered
    console.log(`unfiltered length (${name} fonts):`, arr.length)

    const cssFile = await getCSSFile()
    const boolArray = await Promise.all(arr.map(fontFamily => fontIsFoundInCSSFile(fontFamily, cssFile)))

    let filteredByCSS = []
    for (let i=0; i<boolArray.length; i++) {
        if (boolArray[i]) {
            filteredByCSS.push(arr[i])
        }
    }

    //Length when filtered
    console.log(`filtered length (${name} fonts):`, filteredByCSS.length)

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
    console.log('double filtered length: ', result.length)

    const temporaryFilter = result.filter(fontFamily => fontFamily.indexOf(' ') !== -1)
    console.log('one word fonts length: ', temporaryFilter)

    return result
}

export default filterFontFamilies