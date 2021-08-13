import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'
import Step5 from './Step5'

import { useState } from 'react';

const ControlPanel = ({ font, handlePrevNext, handleChangeSource, sizes, formStep, setFormStep, order, setOrder }) => {
 
  const [selectedSize, setSelectedSize] = useState(null)
  const [addressValue, setAddressValue] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: ''
})

  //INPUT EVENT HANDLERS -- SELECT
  const handleFontSelect = () => {
    setOrder({...order, font: font})
    setFormStep(2)
    console.log("yas")
  }

  const handleSizeChoice = () => {
    console.log("hi")
    setOrder({...order, size: selectedSize})
    setFormStep(3)
    console.log('double yas')
  }

  const handleAddressSubmit = () => {
    console.log("hey")
    setOrder({...order, info: addressValue})
    setFormStep(4)
  }

  return (
    <>
      <Step1
        formStep={formStep}
        handleChangeSource={handleChangeSource}
        sizes={sizes}
        font={font}
        handlePrevNext={handlePrevNext}
        handleFontSelect={handleFontSelect}
        />
      <Step2 
        formStep={formStep}
        setFormStep={setFormStep}
        setSelectedSize={setSelectedSize}
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