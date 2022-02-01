import StripeContainer from "./StripeContainer"
import StepContainer from "./StepContainer"
import { motion, AnimatePresence } from "framer-motion";

const Step4 = ({ formStep, setFormStep, order, setPaymentSuccess }) => {
    
    if (formStep !== 4) {
        return null
    }
    
    return (
        <AnimatePresence>
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            >
                <StepContainer name='/ payment'>
                    <div className='step-content'>
                        <StripeContainer setFormStep={setFormStep} order={order} setPaymentSuccess={setPaymentSuccess}/>
                    </div>
                </StepContainer>
            </motion.div>
        </AnimatePresence>
    )
}

export default Step4