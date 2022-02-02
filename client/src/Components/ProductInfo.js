import Button from './Button';
import React, { useState } from "react";

const ProductInfo = ({ backHandler }) => {

  const [priceInfoShown, setPriceInfoShown] = useState(false)

  const handleClick = () => {
    console.log('click')
    setPriceInfoShown(!priceInfoShown)
  }

    return (
      <>
      <div className="backdrop">
        {
          !priceInfoShown ?
          <div id='info-container'>
            <div id='info-copy'>HEAVYWEIGHT (240 GSM) 100% ORGANIC OPEN-END COTTON T-SHIRT WITH EMBROIDERED LOGO</div>
            <div id='info-price'>£29</div>
            <div id='extra-info'>
              <a 
              id='size-guide-link'
              href='https://www.inkthreadable.co.uk/images/pictures/1-2021/2021-product-images/ssaw21-photos/ssaw21-size-guides/freestyler.png?v=5e204d5f'>
                <p id='price-info'>SIZE GUIDE</p>
              </a>
              <p id='price-info' onClick={handleClick}>PRICE TRANSPARENCY</p>
            </div>
          </div>
          :
          <div id='info-container'>
            <div id='info-copy' class='info-right'>
              TSHIRT: £14.92<br/>
              ORIGINAL EMBROIDERY: £12.00<br/>
              SHIPPING: £03.00
            </div>
            <div id='info-price' class='spa'>£29</div>
            <div>
              <p id='price-info' onClick={handleClick}>PRODUCT INFO</p>
            </div>
        </div>
        }
        {/* <InfoOutlinedIcon /> */}
        <div className='buttons-container'>  
            <Button label='BACK' role='select' handler={backHandler}/>
        </div> 
      </div>
      </>
    )  
}

export default ProductInfo