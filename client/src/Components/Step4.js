import StripeContainer from "./StripeContainer"
import Button from './Button'

const Step4 = ({ formStep, setFormStep }) => {
    
    if (formStep !== 4) {
        return null
    }
    
    return (
        <div className='control-panel'>
            <div className='form-container'>
                <StripeContainer setFormStep={setFormStep}/>
            </div> 
        </div>
    )
}

export default Step4