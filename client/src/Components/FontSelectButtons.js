import Button from './Button'

const FontSelectButtons = ({ handlePrevNext, handleFontSelect }) => {
    return(
    <div className="buttons-container">
      <Button label='PREV' role='' handler={handlePrevNext}/>
      <Button label='THIS ONE' role='select' handler={handleFontSelect}/>
      <Button label='NEXT' role='' handler={handlePrevNext}/>
    </div>
    )
}

export default FontSelectButtons