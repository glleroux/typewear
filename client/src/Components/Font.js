import { useEffect } from 'react';
import WebFont from 'webfontloader';

const Font = ({ font, id, containerClass }) => {

  useEffect(() => {
    WebFont.load({
      google: {
        families: [font]
      }
    });
   }, []);

  return (
        <div className={containerClass}>
            {/* <p id={id} className={`font-family ${easyName} w600`}>{font.toLowerCase()}</p> */}
            <p id={id} className={'font-family'} style={{fontFamily: font, fontWeight: 'bold'}}>{font.toLowerCase()}</p>
        </div>
  )
}

export default Font