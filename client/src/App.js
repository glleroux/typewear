import './App.css';
import { useState, useEffect } from 'react';
import Header from './Components/Header'
import ControlPanel from './Components/ControlPanel'
import ResultPanel from './Components/ResultPanel'
import InfoPanel from './Components/InfoPanel'
import Footer from './Components/Footer'
import StripeContainer from './Components/StripeContainer'

require('dotenv').config()
const axios = require('axios')

const App = () => {

  //GOOGLE FONTS API
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getFonts = async () => {
    const responseAll = await axios.get(`https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env.REACT_APP_KEY}`)
    const fontObjectsAll = responseAll.data.items
    const fontNamesAll = fontObjectsAll.map(font => font.family)
    await setAllFonts(allFonts.concat(fontNamesAll))
    console.log("all fonts got")

    const responseCommon = await axios.get(`https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env.REACT_APP_KEY}&sort=popularity`)
    const fontObjectsCommon = responseCommon.data.items
    const fontNamesCommon = fontObjectsCommon.map(font => font.family).slice(0,200)
    await setCommonFonts(commonFonts.concat(fontNamesCommon))
    console.log("common fonts got")
  }

  //PRELOADED FONTS
  const trendingFonts = [
    'Pattaya',
    "Work Sans",
    "Newsreader",
    'Changa',
    'Sarawabi Mincho',
    'Averia Libre',
    'Anton',
    'Pacifico',
    'Wallpoet',
    'Vollkorn',
    'Unna',
    'Unkempt',
    'Sunshiney',
    'Staatliches',
    'Sora',
    'Quattrocento',
    'Public Sans',
    'Overlock',
    'Nokora',
    'Girassol',
    'Fenix',
    'David Libre',
    'Cormorant',
    'Belgrano',
    'Amiko'
  ]

  //STATE
  const [allFonts, setAllFonts] = useState([])
  const [commonFonts, setCommonFonts] = useState([])
  const [fontIndex, setFontIndex] = useState(0)
  const [fontsToBeDisplayed, setFontsToBeDisplayed] = useState({name: 'trending', data: trendingFonts})
  const [formStep, setFormStep] = useState(1)
  const [order, setOrder] = useState({
    font: '',
    size: '',
    info: {
      name: '',
      email: '',
      address: '',
      city: '',
      state: '',
      zip: ''
    }
  })
  const [infoShown, setInfoShown] = useState(true)

  useEffect(getFonts, [])

  const dataSizes = {
    trending: trendingFonts.length,
    common: commonFonts.length,
    all: allFonts.length
  }

  console.log(dataSizes.all)

  //INPUT EVENT HANDLERS -- SOURCE
  const handleChangeSource = (e) => {
    setFontIndex(0)
    console.log(e.target.id)
    switch (e.target.id) {
      case 'TRENDING' :
        console.log(`fonts now trending`)
        console.log(fontIndex)
        setFontsToBeDisplayed({name: 'trending', data: [...trendingFonts]})
        break
      case 'COMMON' :
        setFontsToBeDisplayed({name: 'common', data: [...commonFonts]})
        break
      case 'ALL' :
        setFontsToBeDisplayed({name: 'all', data: [...allFonts]})
        break
      default :
        break
    }
  }
   
  //INPUT EVENT HANDLERS -- INDEX
  const handlePrevNext = (e) => {
    console.log(e.target)
    const dataSize = fontsToBeDisplayed.data.length
    switch (e.target.id) {
      case 'PREV' :
        console.log(fontIndex)
        fontIndex === 0 
          ? setFontIndex(dataSize - 1)
          : setFontIndex(fontIndex - 1)
        break
      case 'NEXT' :
        fontIndex === dataSize - 1 
          ? setFontIndex(0)
          : setFontIndex(fontIndex + 1)
        break
      default :
        break
    } 
  }

  return (
    <div className="page-container">
      <Header />
      <div className="content-wrapper">
        {allFonts ? 
          <ControlPanel 
          font={fontsToBeDisplayed.data[fontIndex]} 
          handlePrevNext={handlePrevNext} 
          handleChangeSource={handleChangeSource} 
          sizes={dataSizes}
          formStep={formStep}
          setFormStep={setFormStep}
          order={order}
          setOrder={setOrder}
          />
          : <div></div>}
        {infoShown ? <InfoPanel setInfoShown={setInfoShown}/> : <ResultPanel font={fontsToBeDisplayed.data[fontIndex]}/>}
        
      </div>
      <Footer />
    </div>
  );
}

export default App;
