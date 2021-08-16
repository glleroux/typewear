import resultImage from '../assets/result2.png'
import Font from './Font'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import Button from './Button';
import ProductInfo from './ProductInfo';
import { useState } from 'react';

const ResultPanel = ({ font }) => {

    const [showInfo, setShowInfo] = useState(false)

    const backHandler = () => setShowInfo(false)

    return (
      <>
      {showInfo ?
      <ProductInfo backHandler={backHandler}/> : 
      <div className="backdrop">
        <div id="space"></div>
        <div id='result-container'>
            <img id="image" alt="t shirt featuring chosen logo" src={resultImage}></img>
            <Font id='shirt-font' font={font}/>
            <div id='shirt-gradient'></div>
        </div>
        <div className  ='buttons-container'>  
            <Button label='PRODUCT INFO' role='select' handler={() => setShowInfo(true)}/>
        </div> 
      </div> }
      </>
    )  
}

export default ResultPanel