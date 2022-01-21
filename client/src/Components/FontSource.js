const FontSource = ({ label, handleChangeSource, size, selectedSource }) => {

    return (
      <div id={label} className="source" onClick={handleChangeSource}>
        <p id={label} className={selectedSource.name === label.toLowerCase() ? 'source-text-active' : 'source-text'} onClick={handleChangeSource}>{label} ({size})</p>
      </div>
    )
}

export default FontSource

