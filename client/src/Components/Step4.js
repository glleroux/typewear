import StripeContainer from "./StripeContainer"
import Button from './Button'

const Step4 = ({ formStep, setFormStep, order }) => {
    
    if (formStep !== 4) {
        return null
    }
    
    return (
        <div className='control-panel'>
            <div className='form-container'>
                <StripeContainer setFormStep={setFormStep} order={order}/>
            </div> 
        </div>
    )
}

export default Step4