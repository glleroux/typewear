const axios = require('axios')

const getFontNames = async (filter) => {
    const appendage = filter === 'common' ? '&sort=popularity' : ''
    const response = await axios.get(`https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env.REACT_APP_KEY}${appendage}`)
    return response.data.items.map(font => font.family).filter(fontFamily => !exclusionList.includes(fontFamily))
}

const trendingFonts = [
    'Pattaya',
    "Work Sans",
    'Baumans',
    'Belgrano',
    'Unna',
    'Pacifico',
    'Farro',
    'Junge',
    'Lacquer',
    'Solway',
    'Sunshiney',
    'Staatliches',
    'Quattrocento',
    'Overlock',
    'Fenix',
    'Amiko',
    'Cinzel',
    'Chelsea Market',
    'Chicle',
    'Coda',
    'Unkempt',
    'Palanquin',
    'Volkhov',
    'Knewave'
]

const exclusionList = [
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

export { getFontNames, trendingFonts }

