import Sources from './Sources'
import Font from './Font'
import Button from './Button'
import StepContainer from './StepContainer'

const Step1 = ({ formStep, handleChangeSource, sizes, font, handlePrevNext, handleFontSelect }) => {
    if (formStep !== 1) {
        return null
    }
    return (
        <StepContainer name='/ choose font'>
            {/* <Sources handleChangeSource={handleChangeSource} sizes={sizes}/> */}
            <div className='step-content'>
                <Font containerClass={'font-container'} font={font}/>
            </div>
            <div className='buttons-container'>
                <Button label='PREV' role='' handler={handlePrevNext}/>
                <Button label='THIS ONE' role='select' handler={handleFontSelect}/>
                <Button label='NEXT' role='' handler={handlePrevNext}/>    
            </div>
            {/* <ButtonSet handlePrevNext={handlePrevNext} handleFontSelect={handleFontSelect}/> */}
        </StepContainer>
    )
}

export default Step1