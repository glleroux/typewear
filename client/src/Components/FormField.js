const FormField = ({ label, placeholder, extraClass='', value, onChange }) => {
    return (
        <div className={`form-field ${extraClass}`}>
            <div className='form-field-label'>
                <label>{label}</label>
            </div>
            <div className='form-field-input'>
                <input type='text' name={label} value={value} onChange={onChange} placeholder={placeholder}></input>
            </div>
        </div>
    )
}

export default FormField