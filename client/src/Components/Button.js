const Button = ({ label, handler, buttonValidator }) => {
    
    let disabled

    //yeesh
    if (Array.isArray(buttonValidator)) {
        disabled = !buttonValidator.every(Boolean)
    } else if (buttonValidator === undefined) {
        disabled = false
    } else if (buttonValidator === null) {
        disabled = true
    }

    return (
    <button id={`${label}`} disabled={disabled} onClick={handler}>{label}</button>
    )
}

export default Button