const FontSource = ({ label, handleChangeSource, size }) => {
    return (
      <div id={label} className="source" onClick={handleChangeSource}>
        <p id={label} className="source-text">{label} ({size})</p>
      </div>
    )
}

export default FontSource

