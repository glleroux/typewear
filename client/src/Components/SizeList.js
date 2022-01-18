import Size from './Size'

const SizeList = ({ setSelectedSize, selectedSize }) => {

  const sizes = [
    'XS',
    'S',
    'M',
    'L',
    'XL'
  ]

    return (
          <div className="sizes-container">
            {sizes.map(size => <Size label={size} setSelectedSize={setSelectedSize} isActive={(selectedSize === size) ? true : false}/>)}
          </div>
      )
  }
  
  export default SizeList