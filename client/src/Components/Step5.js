import Button from './Button'
import StepContainer from './StepContainer'
import { motion, AnimatePresence } from "framer-motion";

const Step5 = ({ formStep, setFormStep }) => {
    
    if (formStep !== 5) {
        return null
    }
    
    return (
        <AnimatePresence>
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            >
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
            </motion.div>
        </AnimatePresence>
    )
}

export default Step5