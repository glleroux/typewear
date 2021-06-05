const FontSource = ({ label, handleChangeSource }) => {
    return (
      <div id={label} className="source" onClick={handleChangeSource}>
        <p id={label} className="source-text">{label}</p>
      </div>
    )
}

export default FontSource

