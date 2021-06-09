import Sources from '../Components/Sources'
import Font from '../Components/Font'
import Buttons from './FontSelectButtons'
import Button from './Button'
import SizeMenu from './SizeList'
import { useState } from 'react';

const ControlPanel = ({ font, handlePrevNext, handleChangeSource, sizes }) => {

  const [fontSelected, toggleFontSelected] = useState(false)  
  const [selectedSize, setSelectedSize] = useState(null)

  //INPUT EVENT HANDLERS -- SELECT
  const handleSelect = () => {
    toggleFontSelected(true)
    console.log("yas")
  }

    if(!fontSelected) {
      return (
      <div className="control-panel">
        <Sources handleChangeSource={handleChangeSource} sizes={sizes}/>
        <Font containerClass={'control-font-container'} font={font}/>
        <Buttons handlePrevNext={handlePrevNext} handleSelect={handleSelect}/>
      </div>
    )
      } else {
        return (
          <div className="control-panel cp-selected">
            <SizeMenu setSelectedSize={setSelectedSize}/>
            <div className='buttons-container'>
              <Button label='BACK' handler={() => toggleFontSelected(false)}/>
              <Button label='CONTINUE' role='select'/>
            </div>
          </div>
        )
      }
}

// const Size = ({label, setSelectedSize}) => {

//   const [selectedState, setSelectedState] = useState(false)

//   const handleSizeClick = (e) => {
//     setSelectedSize(e.target.id)
//     setSelectedState(!selectedState)  
//   }

//   return (
//     <div className="size-option-button" id={label} onClick={handleSizeClick}>
//       <p className='size-option-text'>{label}</p>
//     </div>
//   )

// }

export default ControlPanel