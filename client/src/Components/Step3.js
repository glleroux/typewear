import FormField from './FormField'
import Button from './Button'
import React, { useState } from 'react'
import StepContainer from './StepContainer'
import PlacesAutocomplete from "./PlacesAutocomplete";
import { motion, AnimatePresence } from "framer-motion";


const Step3 = ({ formStep, setFormStep, handleAddressSubmit, addressValue, setAddressValue }) => {

    const [isGPlacesFocused, setIsGPlacesFocused] = useState(false)

    const onChange = (e) => {
        const key = e.target.name
        setAddressValue({...addressValue, [key]: e.target.value})
    }
    
    if (formStep !== 3) {
        return null
    }

    const toggleGPlacesFocus = () => {
        setIsGPlacesFocused(!isGPlacesFocused)
    } 

    return (
        <AnimatePresence>
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            >
                <StepContainer name='/ shipping'>
                    <div className='step-content'>
                        <div className='form-container'>
                            <FormField label='name' placeholder='Gordon Bombay' value={addressValue.name} onChange={onChange}/>
                            <FormField label='email'placeholder='gordon@themightyducks.com' value={addressValue.email} onChange={onChange}/>    
                            <div className={`form-field`}>
                                <div className={isGPlacesFocused ? 'form-field-label label-focused' :'form-field-label'}>
                                    <label>address</label>
                                </div>
                                <div className={isGPlacesFocused ? 'form-field-input line-focused' :'form-field-input'}>
                                    <PlacesAutocomplete toggleGPlacesFocus={toggleGPlacesFocus} isGPlacesFocused={isGPlacesFocused} addressValue={addressValue} setAddressValue={setAddressValue}/>
                                </div>
                            </div>
                    
                        </div>
                    </div>
                    <div className='buttons-container'>
                        <Button label='BACK' handler={() => setFormStep(2)}/>   
                        <Button label='CONTINUE' role='select' handler={() => handleAddressSubmit()}/>
                    </div>
                </StepContainer>
            </motion.div>
        </AnimatePresence>
    )

}

export default Step3