import Button from './Button'

const Step5 = ({ formStep, setFormStep }) => {
    
    if (formStep !== 5) {
        return null
    }
    
    return (
        <div className='control-panel'>
            <p>success</p>
            <div className='buttons-container'>  
                    <Button label='GO AGAIN' role='select' handler={() => setFormStep(1)}/>
            </div> 
        </div>
    )
}

export default Step5