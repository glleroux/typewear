import Button from './Button';

const ProductInfo = ({ backHandler }) => {
    return (
      <>
      <div className="backdrop">
        <div id='info-container'>
            <div id='info-copy'>HEAVYWEIGHT (180 GSM) 100% ORGANIC RING SPUN COTTON T-SHIRT WITH EMBROIDERED LOGO</div>
            <div id='info-price'>£29</div>
        </div>
        {/* <InfoOutlinedIcon /> */}
        <div className='buttons-container'>  
            <Button label='BACK' role='select' handler={backHandler}/>
        </div> 
      </div>
      </>
    )  
}

export default ProductInfo