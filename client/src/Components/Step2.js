import SizeList from '../Components/SizeList'
import Button from '../Components/Button'
import StepContainer from './StepContainer'
import { motion, AnimatePresence } from "framer-motion";

const Step2 = ({ formStep, setFormStep, setSelectedSize, selectedSize, handleSizeChoice }) => {
    if (formStep !== 2) {
        return null
    }

    return (
        <AnimatePresence>
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            >
                <StepContainer name='/ choose size'>
                    <div className='step-content'>
                        <SizeList setSelectedSize={setSelectedSize} selectedSize={selectedSize}/>
                    </div>
                    <div className='buttons-container'>
                        <Button label='BACK' handler={() => setFormStep(1)}/>
                        <Button label='CONTINUE' role='select' buttonValidator={selectedSize} handler={() => handleSizeChoice()}/>
                    </div>
                </StepContainer>
            </motion.div>
        </AnimatePresence>
    )
}

export default Step2