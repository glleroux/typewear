import { useState } from 'react';

const Size = ({label, setSelectedSize, isActive}) => {

    const [isSelected, setIsSelected] = useState(false)
  
    const handleSizeClick = (e) => {
      setSelectedSize(e.target.id)
      setIsSelected(!isSelected)  
    }
  
    return (
      <div className={isActive ? 'size-option-button-active' : 'size-option-button'} id={label} onClick={handleSizeClick}>
        <p id={label} className={isActive ? 'size-option-text-active' : 'size-option-text'} onClick={handleSizeClick}>{label}</p>
      </div>
    )
  
  }
  
  export default Size