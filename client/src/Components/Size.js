import { useState } from 'react';

const Size = ({label, setSelectedSize, isActive}) => {

    const [isSelected, setIsSelected] = useState(false)
  
    const handleSizeClick = (e) => {
      setSelectedSize(e.target.id)
      setIsSelected(!isSelected)  
    }
  
    return (
      <div className={isActive ? 'size-option-button-active' : 'size-option-button'} id={label} onClick={handleSizeClick}>
        <p className={isActive ? 'size-option-text-active' : 'size-option-text'}>{label}</p>
      </div>
    )
  
  }
  
  export default Size