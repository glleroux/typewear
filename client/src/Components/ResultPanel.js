import resultImage from '../assets/result.png'
import Font from './Font'

const ResultPanel = ({ font }) => {
    return (
      <>
      <div className="backdrop">
        <img className="result-image" alt="t shirt featuring chosen logo" src={resultImage}></img>
        <Font id='shirt-font' containerClass={'result-font-container'} font={font}/>
      </div>
      </>
    )  
}

export default ResultPanel