import Button from './Button';

const ProductInfo = () => {
    return (
      <>
      <div className="backdrop">
        <div id='info-container'>
            <div id='info-copy'>HEAVYWEIGHT (180 GSM) 100% ORGANIC RING SPUN COTTON T-SHIRT WITH EMBROIDERED LOGO</div>
            <div id='info-price'>£29</div>
        </div>
        {/* <InfoOutlinedIcon /> */}
        <div className='buttons-container'>  
                    <Button label='PRODUCT INFO' role='select'/>
        </div> 
      </div>
      </>
    )  
}

export default ResultPanel