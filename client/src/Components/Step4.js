import StripeContainer from "./StripeContainer"
import Button from './Button'
import StepContainer from "./StepContainer"

const Step4 = ({ formStep, setFormStep, order }) => {
    
    if (formStep !== 4) {
        return null
    }
    
    return (
        <StepContainer name='/ payment'>
            <div className='step-content'>
                <StripeContainer setFormStep={setFormStep} order={order}/>
            </div>
        </StepContainer>
    )
}

export default Step4