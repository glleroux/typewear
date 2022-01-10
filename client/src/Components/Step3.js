import FormField from './FormField'
import Button from './Button'
import React, { useState } from 'react'
import StepContainer from './StepContainer'
import PlacesAutocomplete from "./PlacesAutocomplete";


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
                            <PlacesAutocomplete toggleGPlacesFocus={toggleGPlacesFocus} isGPlacesFocused={isGPlacesFocused}/>
                        </div>
                    </div>
            
                </div>
            </div>
            <div className='buttons-container'>
                <Button label='BACK' handler={() => setFormStep(2)}/>   
                <Button label='CONTINUE' role='select' handler={() => handleAddressSubmit()}/>
            </div>
        </StepContainer>
    )

}

export default Step3