const Button = ({ label, role, handler }) => {
    return (
    // <div id={label} className={"button " + (role ? 'select' : '')} onClick={handler}>
    //   <p id={label} className="button-text">{label}</p>
    // </div>
    <button id={`${label}`} onClick={handler}>{label}</button>
    )
}

export default Button