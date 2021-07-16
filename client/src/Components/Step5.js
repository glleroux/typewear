import Button from './Button'

const Step5 = ({ formStep, setFormStep }) => {
    
    if (formStep !== 5) {
        return null
    }
    
    return (
        <>
            <div className='success-message'>
                <h2>Nice!</h2>
                <p>Your t-shirt is on the way.</p>
            </div>
            <div className='buttons-container'>  
                    <Button label='GO AGAIN' role='select' handler={() => setFormStep(1)}/>
            </div> 
        </>
    )
}

export default Step5