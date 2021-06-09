import Size from './Size'

const SizeList = ({ setSelectedSize }) => {

    return (
          <div className="sizes-container">
            <Size label='XS' setSelectedSize={setSelectedSize}/>
            <Size label='S'setSelectedSize={setSelectedSize}/>
            <Size label='M'setSelectedSize={setSelectedSize}/>
            <Size label='L'setSelectedSize={setSelectedSize}/>
            <Size label='XL'setSelectedSize={setSelectedSize}/>
          </div>
      )
  }
  
  export default SizeList