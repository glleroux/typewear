import Sources from '../Components/Sources'
import Font from '../Components/Font'
import Buttons from './FontSelectButtons'
import Button from './Button'
import SizeMenu from './SizeList'

import Step1 from './Step1'
import Step2 from './Step2'
import { useState } from 'react';

const ControlPanel = ({ font, handlePrevNext, handleChangeSource, sizes, formStep, setFormStep, order, setOrder }) => {
 
  const [selectedSize, setSelectedSize] = useState(null)

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

  // if(!isFontSelected) {
  //   return (
  //   <div className="control-panel">
  //     <Sources handleChangeSource={handleChangeSource} sizes={sizes}/>
  //     <Font containerClass={'control-font-container'} font={font}/>
  //     <Buttons handlePrevNext={handlePrevNext} handleSelect={handleSelect}/>
  //   </div>
  // )
  //   } else {
  //     return (
  //       <div className="control-panel cp-selected">
  //         <SizeMenu setSelectedSize={setSelectedSize}/>
  //         <div className='buttons-container'>
  //           <Button label='BACK' handler={() => toggleFontSelected(false)}/>
  //           <Button label='CONTINUE' role='select'/>
  //         </div>
  //       </div>
  //     )
  //   }

  return (
    <form>
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
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
        handleSizeChoice={handleSizeChoice}
        />
    </form>
  )
}

export default ControlPanel