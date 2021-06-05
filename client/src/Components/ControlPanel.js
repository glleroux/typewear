import Sources from '../Components/Sources'
import Font from '../Components/Font'
import Buttons from '../Components/Buttons'

const ControlPanel = ({ font, handlePrevNext, handleChangeSource }) => {

    return (
      <div className="control-panel">
        <Sources handleChangeSource={handleChangeSource}/>
        <Font containerClass={'control-font-container'} font={font}/>
        <Buttons handlePrevNext={handlePrevNext}/>
      </div>
    )
}

export default ControlPanel