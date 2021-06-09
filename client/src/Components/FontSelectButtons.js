import Button from './Button'

const FontSelectButtons = ({ handlePrevNext, handleSelect }) => {
    return(
    <div className="buttons-container">
      <Button label='PREV' role='' handler={handlePrevNext}/>
      <Button label='THIS ONE' role='select' handler={handleSelect}/>
      <Button label='NEXT' role='' handler={handlePrevNext}/>
    </div>
    )
}

export default FontSelectButtons