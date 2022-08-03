import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header'
import ControlPanel from './components/ControlPanel'
import ResultPanel from './components/ResultPanel'
import InfoPanel from './components/InfoPanel'
import Footer from './components/Footer'
import Search from './components/Search'
import StepLoading from './components/StepLoading'

import { getFontNames, trendingFonts } from './services/fontService'

const App = () => {

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getFonts = async () => {
    const allFontNames = await getFontNames('all')
    setAllFonts(allFonts.concat(allFontNames))
    const commonFontNames = await getFontNames('common')
    setCommonFonts(commonFonts.concat(commonFontNames.slice(0,200)))
  }
 
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
  const [paymentSuccess, setPaymentSuccess] = useState(null)

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
        setSelectedSource={setSelectedSource}
        allFonts={allFonts}
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
          paymentSuccess={paymentSuccess}
          setPaymentSuccess={setPaymentSuccess}
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