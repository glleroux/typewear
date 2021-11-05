import FontSource from '../Components/FontSource'

const Sources = ({ handleChangeSource, listSizes }) => {

    return (
        <div className="source-container">
          <FontSource label="TRENDING" handleChangeSource={handleChangeSource} size={listSizes.trending}/>
          <FontSource label="COMMON" handleChangeSource={handleChangeSource} size={listSizes.common}/>
          <FontSource label="ALL" handleChangeSource={handleChangeSource} size={listSizes.all}/>
        </div>
    )
}

export default Sources