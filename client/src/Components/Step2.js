import SizeList from '../Components/SizeList'
import Button from '../Components/Button'

const Step2 = ({ formStep, setFormStep, setSelectedSize, handleSizeChoice }) => {
    if (formStep !== 2) {
        return null
    }

    return (
        <>
            <SizeList setSelectedSize={setSelectedSize}/>
            <div className='buttons-container'>
                <Button label='BACK' handler={() => setFormStep(1)}/>
                <Button label='CONTINUE' role='select' handler={() => handleSizeChoice()}/>
            </div>
        </>
    )
}

export default Step2