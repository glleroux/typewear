import FontSource from '../Components/FontSource'

const Sources = ({ handleChangeSource }) => {

    return (
        <div className="source-container">
          <FontSource label="TRENDING" handleChangeSource={handleChangeSource}/>
          <FontSource label="COMMON" handleChangeSource={handleChangeSource}/>
          <FontSource label="ALL" handleChangeSource={handleChangeSource}/>
        </div>
    )
}

export default Sources