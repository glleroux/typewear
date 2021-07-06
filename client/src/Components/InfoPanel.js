import Button from './Button'

const InfoPanel = ({ setInfoShown }) => {
    return (
        <div className="backdrop">
            <div id='product-info-container'>
                <div id='product-info'>
                    <p>HEAVYWEIGHT (180 GSM) 100% ORGANIC RING SPUN COTTON T-SHIRT WITH EMBROIDERED LOGO</p>
                </div>
                <div id='product-price'>
                    <p>£29</p>
                </div>
            </div>
            <Button label='BACK' handler={() => setInfoShown(false)}/>
        </div>
    )
}

export default InfoPanel