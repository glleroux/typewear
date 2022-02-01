import './App.css';
import { useState, useEffect } from 'react';
import Header from './Components/Header'
import ControlPanel from './Components/ControlPanel'
import ResultPanel from './Components/ResultPanel'
import InfoPanel from './Components/InfoPanel'
import Footer from './Components/Footer'
import Search from './Components/Search'
import filterFontFamilies from './utils/filter_missing_fonts'
import StepLoading from './Components/StepLoading'

require('dotenv').config()
const axios = require('axios')

const App = () => {

  //GOOGLE FONTS API
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getFonts = async () => {
    const responseAll = await axios.get(`https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env.REACT_APP_KEY}`)
    const fontObjectsAll = responseAll.data.items
    const fontNamesAll = fontObjectsAll.map(font => font.family)
    const filteredFontNamesAll = await filterFontFamilies(fontNamesAll)
    await setAllFonts(allFonts.concat(filteredFontNamesAll))

    const responseCommon = await axios.get(`https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env.REACT_APP_KEY}&sort=popularity`)
    const fontObjectsCommon = responseCommon.data.items
    const fontNamesCommon = fontObjectsCommon.map(font => font.family).slice(0,200)
    const filteredFontNamesCommon = await filterFontFamilies(fontNamesCommon)
    await setCommonFonts(commonFonts.concat(filteredFontNamesCommon))
  }

  //PRELOADED FONTS
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

  useEffect(getFonts, [])

  //STATE
  const [allFonts, setAllFonts] = useState([])
  const [commonFonts, setCommonFonts] = useState([])
  const [formStep, setFormStep] = useState(1)
  const [order, setOrder] = useState({
    font: '',
    size: '',
    info: {
      name: '',
      email: '',
      address1: '',
      address2: '',
      city: '',
      county: '',
      postcode: '',
      country: '',
      formatted_address: ''
    }
  })
  const [infoShown, setInfoShown] = useState(false)
  const [searchShown, setSearchShown] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedSource, setSelectedSource] = useState({name: 'trending', data: [...trendingFonts].sort(() => Math.random() - 0.5)})
  const [selectedResult, setSelectedResult] = useState(null)
  const [displayedFont, setDisplayedFont] = useState(selectedSource.data[Math.floor(Math.random()*selectedSource.data.length)])

  const sourceLengths = {
    trending: trendingFonts.length,
    common: commonFonts.length,
    all: allFonts.length
  }

  //INPUT EVENT HANDLERS -- SOURCE
  const handleChangeSource = (e) => {
    setSelectedResult(null)
    switch (e.target.id) {
      case 'TRENDING' :
        setSelectedSource({name: 'trending', data: [...trendingFonts]})
        break
      case 'COMMON' :
        setSelectedSource({name: 'common', data: [...commonFonts]})
        break
      case 'ALL' :
        setSelectedSource({name: 'all', data: [...allFonts]})
        break
      default :
        break
    }
  }

  return (
    <div className='page-container'>
      <Header />
      {searchShown && <Search
        setSearchShown={setSearchShown}
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery}
        sourceLengths={sourceLengths}
        selectedSource={selectedSource}
        handleChangeSource={handleChangeSource}
        selectedResult={selectedResult}
        setSelectedResult={setSelectedResult}
        setDisplayedFont={setDisplayedFont}
        trendingFonts={trendingFonts}
      />}
      {allFonts.length > 0 && commonFonts.length > 0 
      ? <div className='content-wrapper'>
        <ControlPanel 
          font={displayedFont} //HERE NEEDS TO BE STATE
          formStep={formStep}
          setFormStep={setFormStep}
          order={order}
          setOrder={setOrder}
          setSearchShown={setSearchShown}
        />
        {infoShown ? <InfoPanel setInfoShown={setInfoShown}/> : <ResultPanel 
          font={displayedFont}
        />}
      </div>
      : <div className='content-wrapper'>
          <StepLoading />
          <StepLoading />
        </div>}
      <Footer />
    </div>
  )
}

export default App;