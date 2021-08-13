import Button from './Button'
import StepContainer from './StepContainer'

const Step5 = ({ formStep, setFormStep }) => {
    
    if (formStep !== 5) {
        return null
    }
    
    return (
        <StepContainer>
            <div className='step-content'>
                <div className='success-message'>
                    <h2>Nice!</h2>
                    <p>Your t-shirt is on the way.</p>
                </div>
            </div>
            <div className='buttons-container'>  
                    <Button label='GO AGAIN' role='select' handler={() => setFormStep(1)}/>
            </div> 
        </StepContainer>
    )
}

export default Step5