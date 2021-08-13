const StepContainer = (props) => {

    return (
        <div className='step-container'>
            <p className='step-name'>{props.name}</p>
            <div className='step-input'>
                {props.children}
            </div>
        </div>
    )

}

export default StepContainer