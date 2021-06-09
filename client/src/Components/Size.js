import { useState } from 'react';

const Size = ({label, setSelectedSize}) => {

    const [isSelected, setIsSelected] = useState(false)
  
    const handleSizeClick = (e) => {
      setSelectedSize(e.target.id)
      setIsSelected(!isSelected)  
    }
  
    return (
      <div className="size-option-button" id={label} onClick={handleSizeClick}>
        <p className='size-option-text'>{label}</p>
      </div>
    )
  
  }
  
  export default Size