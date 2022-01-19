import Font from './Font'
import Button from './Button'
import StepContainer from './StepContainer'
import { motion, AnimatePresence } from "framer-motion";


const Step1 = ({ formStep, font, handleFontSelect, setSearchShown }) => {
    if (formStep !== 1) {
        return null
    }
    return (
        <AnimatePresence>
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            >
                <StepContainer name='/ choose font'>
                    <div className='step-content'>
                        <Font containerClass={'font-container'} font={font}/>
                    </div>
                    <div className='buttons-container'>
                        <Button label='SEARCH' role='' handler={setSearchShown}/>
                        <Button label='THIS ONE' role='select' handler={handleFontSelect}/>  
                    </div>
                </StepContainer>
            </motion.div>
        </AnimatePresence>
    )
}

export default Step1