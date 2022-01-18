import { getName } from '../utils/font_helper'

const Font = ({ font, id, containerClass }) => {

  const easyName = getName(font)

  return (
    
        <div className={containerClass}>
            <p id={id} className={`font-family ${easyName} w600`}>{font.toLowerCase()}</p>
        </div>
  
  )
}

export default Font