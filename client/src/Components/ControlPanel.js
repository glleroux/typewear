import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'
import Step5 from './Step5'

import { useState } from 'react';

const ControlPanel = ({ font, formStep, setFormStep, order, setOrder, setSearchShown }) => {
 
  const [selectedSize, setSelectedSize] = useState(null)
  const [addressValue, setAddressValue] = useState({
    name: '',
    email: '',
    address1: '',
    address2: '',
    city: '',
    county: '',
    postcode: '',
    country: '',
    formatted_address: ''
})

  //INPUT EVENT HANDLERS -- SELECT
  const handleFontSelect = () => {
    setOrder({...order, font: font})
    setFormStep(2)
  }

  const handleSizeChoice = () => {
    setOrder({...order, size: selectedSize})
    setFormStep(3)
  }

  const handleAddressSubmit = () => {
    setOrder({...order, info: addressValue})
    setFormStep(4)
  }

  return (
    <>
      <Step1
        formStep={formStep}
        font={font}
        handleFontSelect={handleFontSelect}
        setSearchShown={setSearchShown}
        />
      <Step2 
        formStep={formStep}
        setFormStep={setFormStep}
        setSelectedSize={setSelectedSize}
        selectedSize={selectedSize}
        handleSizeChoice={handleSizeChoice}
        />
      <Step3
        formStep={formStep}
        setFormStep={setFormStep}
        addressValue={addressValue}
        setAddressValue={setAddressValue}
        handleAddressSubmit={handleAddressSubmit}   
        />
      <Step4
        formStep={formStep}
        setFormStep={setFormStep}
        order={order}
        />
      <Step5
        formStep={formStep}
        setFormStep={setFormStep}
        />
    </>
  )
}

export default ControlPanel