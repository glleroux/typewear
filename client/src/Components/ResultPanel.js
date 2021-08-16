import resultImage from '../assets/result2.png'
import Font from './Font'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import Button from './Button';

const ResultPanel = ({ font }) => {
    return (
      <>
      <div className="backdrop">
        <div id="space"></div>
        <div id='result-container'>
            <img id="image" alt="t shirt featuring chosen logo" src={resultImage}></img>
            <Font id='shirt-font' font={font}/>
            <div id='shirt-gradient'></div>
        </div>
        <div className='buttons-container'>  
            <Button label='PRODUCT INFO' role='select'/>
        </div> 
      </div>
      </>
    )  
}

export default ResultPanel