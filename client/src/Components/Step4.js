import StripeContainer from "./StripeContainer"
import Button from './Button'

const Step4 = ({ formStep, setFormStep }) => {
    
    if (formStep !== 4) {
        return null
    }
    
    return (
        <div className='control-panel'>
            <div className='buttons-container'>
                    <Button label='BACK' handler={() => setFormStep(3)}/>   
                    <Button label='CONTINUE' role='select'/>
            </div>  
        </div>
    )
}

export default Step4