import FontSource from '../Components/FontSource'

const Sources2 = ({ label, handleChangeSource, selectedSource, sourceLengths}) => {
    
    return (
        <div className='form-field'>
            <div className='form-field-label'>
                <label>{label}</label>
            </div>
            <div className='form-field-sources'>
                <FontSource label="TRENDING" size={sourceLengths.trending} handleChangeSource={handleChangeSource} selectedSource={selectedSource}/>
                <FontSource label="COMMON" size={sourceLengths.common} handleChangeSource={handleChangeSource} selectedSource={selectedSource}/>
                <FontSource label="ALL" size={sourceLengths.all} handleChangeSource={handleChangeSource} selectedSource={selectedSource}/>
            </div>
        </div>
    )
}

export default Sources2