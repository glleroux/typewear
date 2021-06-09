import FontSource from '../Components/FontSource'

const Sources = ({ handleChangeSource, sizes }) => {

    return (
        <div className="source-container">
          <FontSource label="TRENDING" handleChangeSource={handleChangeSource} size={sizes.trending}/>
          <FontSource label="COMMON" handleChangeSource={handleChangeSource} size={sizes.common}/>
          <FontSource label="ALL" handleChangeSource={handleChangeSource} size={sizes.all}/>
        </div>
    )
}

export default Sources