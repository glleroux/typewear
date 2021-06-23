import { React, useState } from 'react';
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import Button from './Button'
import axios from 'axios'

const PaymentForm = ({ setFormStep }) => {

    const [success, setSuccess] = useState(false)
    const stripe = useStripe()
    const elements = useElements()

    const cardStyle = {
        style: {
            base: {
                color: "#32325d",
                fontFamily: 'Arial, sans-serif',
                fontSmoothing: "antialiased",
                fontSize: "16px",
                "::placeholder": {
                color: "#32325d"
                }
            },
            invalid: {
                color: "#fa755a",
                iconColor: "#fa755a"
            }
        }
      };

    const handleSubmit = async (e) => {
        console.log("submitted")
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })

        if(!error) {
            console.log("Stripe 23 | token generated", paymentMethod)
            //FOR BACKEND
            try {
                const {id} = paymentMethod
                console.log('trying')
                const response = await axios.post("http://localhost:8080/payment", {
                    amount: 2999,
                    id
                })

                if (response.data.success) {
                    console.log("successful payment")
                    setSuccess(true)
                    setFormStep(5)
                }
            } catch (error) {
                console.log("Error", error)
            }
        } else {
            console.log(error.message)
        }
    }

        return (
            <form id="stripe-input" onSubmit={handleSubmit} style={{ maxWidth: 304 }}>
                <CardElement />
                <div className='buttons-container'>
                    <Button label='BACK' handler={() => setFormStep(3)}/>   
                    <button className='button select'><p className='button-text'>PAY</p></button>
                </div>
            </form>
            
            //FOR LATER
            // <>
            // {!success ? 
            // <form onSubmit={handleSubmit}>
            //     <fieldset className="FormGroup">
            //         <div className="FormRow">
            //             <CardElement/>
            //         </div>
            //     </fieldset>
            //     <button>Pay</button>
            // </form>
            // :
            // <div>
            //     <h2>Success message</h2>
            // </div> 
            // }
            // </>
        )
}

export default PaymentForm