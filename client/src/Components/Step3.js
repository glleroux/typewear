import FormField from './FormField'
import Button from './Button'
import { useState } from 'react'

const Step3 = ({ formStep, setFormStep, handleAddressSubmit, addressValue, setAddressValue }) => {

    const onChange = (e) => {
        const key = e.target.name
        setAddressValue({...addressValue, [key]: e.target.value})
    }
    
    if (formStep !== 3) {
        return null
    }

    return (
        <div className='control-panel'>
            <div className='form-container'>
                <FormField label='name' placeholder='Gordon Bombay' value={addressValue.name} onChange={onChange}/>
                <FormField label='email'placeholder='gordon@themightyducks.com' value={addressValue.email} onChange={onChange}/>
                <FormField label='address'placeholder='Peavey Park' value={addressValue.address} onChange={onChange}/>
                <FormField label='city' placeholder='Minneapolis' value={addressValue.city} onChange={onChange}/>
                <div className='two-field-container'>
                    <FormField label='state' placeholder='MN' extraClass='field-short' value={addressValue.state} onChange={onChange}/>
                    <FormField label='zip' placeholder='55404' extraClass='field-short' value={addressValue.zip} onChange={onChange}/>
                </div>
                <div className='buttons-container'>
                    <Button label='BACK' handler={() => setFormStep(2)}/>   
                    <Button label='CONTINUE' role='select' handler={() => handleAddressSubmit()}/>
                </div>
            </div>
        </div>
    )

}

export default Step3