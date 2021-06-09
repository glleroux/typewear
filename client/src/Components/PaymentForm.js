import { React, useState } from 'react';
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from 'axios'

const PaymentForm = () => {

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
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })

        if(!error) {
            console.log("Stripe 23 | token generated", paymentMethod)
            //FOR BACKEND
            // try {
            //     const {id} = paymentMethod
            //     const response = await axios.post("http://localhost:4000/payment", {
            //         amount: 2000,
            //         id
            //     })

            //     if (response.data.success) {
            //         console.log("successful payment")
            //         setSuccess(true)
            //     }
            // } catch (error) {
            //     console.log("Error", error)
            // }
        } else {
            console.log(error.message)
        }
    }

        return (
            <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}></form>
            
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