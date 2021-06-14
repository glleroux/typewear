import Sources from '../Components/Sources'
import Font from '../Components/Font'
import Buttons from './FontSelectButtons'

const Step1 = ({ formStep, handleChangeSource, sizes, font, handlePrevNext, handleFontSelect }) => {
    if (formStep !== 1) {
        return null
    }
    return (
        <div className="control-panel">
        <Sources handleChangeSource={handleChangeSource} sizes={sizes}/>
        <Font containerClass={'control-font-container'} font={font}/>
        <Buttons handlePrevNext={handlePrevNext} handleFontSelect={handleFontSelect}/>
        </div>
    )
}

export default Step1