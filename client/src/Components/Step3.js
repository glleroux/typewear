import FormField from './FormField'
import Button from './Button'
import React, { useState } from 'react'
import StepContainer from './StepContainer'
import PlacesAutocomplete from "./PlacesAutocomplete";
import { motion, AnimatePresence } from "framer-motion";


const Step3 = ({ formStep, setFormStep, handleAddressSubmit, addressValue, setAddressValue }) => {

    const [isGPlacesFocused, setIsGPlacesFocused] = useState(false)
    const [addressChosen, setAddressChosen] = useState(false)
    const [email, setEmail] = useState('')
    const [emailValid, setEmailValid] = useState(false)

    const onChange = (e) => {
        const key = e.target.name
        setAddressValue({...addressValue, [key]: e.target.value})

        if (e.target.name === 'email') {
            setEmail(e.target.value)
            if (!validateEmail(email)) {
                setEmailValid(false)
            } else {
                setEmailValid(true)
            }
            console.log(emailValid)
        }
    }
    
    if (formStep !== 3) {
        return null
    }

    const toggleGPlacesFocus = () => {
        setIsGPlacesFocused(!isGPlacesFocused)
    } 

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
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
                            <FormField label='email' placeholder='gordon@themightyducks.com' value={addressValue.email} onChange={onChange} emailValid={emailValid} email={email}/>    
                            <div className={`form-field`}>
                                <div className={isGPlacesFocused ? 'form-field-label label-focused' :'form-field-label'}>
                                    <label for='listbox'>address</label>
                                </div>
                                <div className={isGPlacesFocused ? 'form-field-input line-focused' :'form-field-input'}>
                                    <PlacesAutocomplete toggleGPlacesFocus={toggleGPlacesFocus} isGPlacesFocused={isGPlacesFocused} addressValue={addressValue} setAddressValue={setAddressValue} setAddressChosen={setAddressChosen}/>
                                </div>
                            </div>
                    
                        </div>
                    </div>
                    <div className='buttons-container'>
                        <Button label='BACK' handler={() => setFormStep(2)}/>   
                        <Button buttonValidator={[addressValue.name, addressValue.email, addressChosen, emailValid]} label='CONTINUE' role='select' handler={() => handleAddressSubmit()}/>
                    </div>
                </StepContainer>
            </motion.div>
        </AnimatePresence>
    )

}

export default Step3