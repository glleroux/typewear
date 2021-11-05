import Font from './Font'
import Button from './Button'
import StepContainer from './StepContainer'

const Step1 = ({ formStep, font, handleFontSelect, setSearchShown }) => {
    if (formStep !== 1) {
        return null
    }
    return (
        <StepContainer name='/ choose font'>
            <div className='step-content'>
                <Font containerClass={'font-container'} font={font}/>
            </div>
            <div className='buttons-container'>
                <Button label='SEARCH' role='' handler={setSearchShown}/>
                <Button label='THIS ONE' role='select' handler={handleFontSelect}/>  
            </div>
        </StepContainer>
    )
}

export default Step1