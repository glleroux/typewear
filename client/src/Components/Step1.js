import Sources from './Sources'
import Font from './Font'
import Button from './Button'
// import ButtonSet from './ButtonSet'

const Step1 = ({ formStep, handleChangeSource, sizes, font, handlePrevNext, handleFontSelect }) => {
    if (formStep !== 1) {
        return null
    }
    return (
        <>
        {/* <Sources handleChangeSource={handleChangeSource} sizes={sizes}/> */}
        <Font containerClass={'font-container'} font={font}/>
        <div className='buttons-container'>
            <Button label='PREV' role='' handler={handlePrevNext}/>
            <Button label='THIS ONE' role='select' handler={handleFontSelect}/>
            <Button label='NEXT' role='' handler={handlePrevNext}/>    
        </div>
        {/* <ButtonSet handlePrevNext={handlePrevNext} handleFontSelect={handleFontSelect}/> */}
        </>
    )
}

export default Step1