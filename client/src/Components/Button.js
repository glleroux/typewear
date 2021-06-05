const Button = ({ label, role, handlePrevNext }) => {
    return (
    <div id={label} className={"button " + (role ? 'select' : '')} onClick={handlePrevNext}>
      <p id={label} className="button-text">{label}</p>
    </div>
    )
}

export default Button