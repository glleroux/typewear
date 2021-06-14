import SizeList from '../Components/SizeList'
import Button from '../Components/Button'

const Step2 = ({ formStep, setFormStep, setSelectedSize }) => {
    if (formStep !== 2) {
        return null
    }

    return (
        <div className='control-panel cp-selected'>
            <SizeList setSelectedSize={setSelectedSize}/>
            <div className='buttons-container'>
                <Button label='BACK' handler={() => setFormStep(1)}/>
                <Button label='CONTINUE' role='select'/>
            </div>
        </div>
    )
}

export default Step2