import { useState } from 'react';

const FormField = ({ label, id, placeholder, extraClass='', value, onChange, style, setSelectedSource, allFonts, emailValid, email }) => {
    
    const [isFocused, setIsFocused] = useState(false)

    const toggleFocus = () => {
        setIsFocused(!isFocused)
        if (label === 'SEARCH') {
            setSelectedSource({name: 'all', data: [...allFonts]})
        }
    } 

    return (
        <div id={id} className={`form-field ${extraClass}`}>
            <div className={isFocused ? 'form-field-label label-focused' :'form-field-label'}>
                <label for={label}>{label}</label>
                {(label === 'email' && email && !emailValid) && <p id="invalid-flag">invalid</p>}
            </div>
            <div className={isFocused ? 'form-field-input line-focused' :'form-field-input'}>
                <input id={label} onFocus={toggleFocus} onBlur={toggleFocus} type='text' name={label} value={value} onChange={onChange} placeholder={placeholder} style={style}></input>
            </div>
        </div>
    )
}

export default FormField