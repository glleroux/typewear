import { getName } from '../utils/font_helper'
import { Textfit } from 'react-textfit';

const Font = ({ font, id, containerClass }) => {

  console.log(font)
  const easyName = getName(font)

  return (
    
        <div className={containerClass}>
          <Textfit mode="single">
            <p id={id} className={`font-family ${easyName} w600`}>{font.toLowerCase()}</p>
          </Textfit>
        </div>
  
  )
}

export default Font