import { useState } from 'react';

const FormField = ({ label, placeholder, extraClass='', value, onChange, style }) => {
    
    const [isFocused, setIsFocused] = useState(false)

    const toggleFocus = () => {
        setIsFocused(!isFocused)
    } 
    
    return (
        <div className={`form-field ${extraClass}`}>
            <div className={isFocused ? 'form-field-label label-focused' :'form-field-label'}>
                <label>{label}</label>
            </div>
            <div className={isFocused ? 'form-field-input line-focused' :'form-field-input'}>
                <input onFocus={toggleFocus} onBlur={toggleFocus} type='text' name={label} value={value} onChange={onChange} placeholder={placeholder} style={style}></input>
            </div>
        </div>
    )
}

export default FormField