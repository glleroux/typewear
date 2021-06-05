import Button from './Button'

const Buttons = ({ handlePrevNext }) => {
    return(
    <div className="buttons-container">
      <Button label='PREV' role='' handlePrevNext={handlePrevNext}/>
      <Button label='THIS ONE' role='select'/>
      <Button label='NEXT' role='' handlePrevNext={handlePrevNext}/>
    </div>
    )
}

export default Buttons