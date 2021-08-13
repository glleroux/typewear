import SizeList from '../Components/SizeList'
import Button from '../Components/Button'
import StepContainer from './StepContainer'

const Step2 = ({ formStep, setFormStep, setSelectedSize, handleSizeChoice }) => {
    if (formStep !== 2) {
        return null
    }

    return (
        <StepContainer name='/ choose size'>
            <div className='step-content'>
                <SizeList setSelectedSize={setSelectedSize}/>
            </div>
            <div className='buttons-container'>
                <Button label='BACK' handler={() => setFormStep(1)}/>
                <Button label='CONTINUE' role='select' handler={() => handleSizeChoice()}/>
            </div>
        </StepContainer>
    )
}

export default Step2