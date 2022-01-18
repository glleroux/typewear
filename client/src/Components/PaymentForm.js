import { React } from 'react';
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import Button from './Button'
import axios from 'axios'

const PaymentForm = ({ setFormStep, order, options }) => {
    const stripe = useStripe()
    const elements = useElements()

    const cardStyle = {
        style: {
            base: {
                iconColor: "#ffffff",
                color: "#3a3a3a",
                fontFamily: 'roboto-mono, sans-serif',
                fontSmoothing: "antialiased",
                fontSize: "16px",
                "::placeholder": {
                color: "#32325d"
                },
                "::selection": {
                    backgroundColor: "#f5f5f5"
                }

            },
            invalid: {
                color: "#fa755a",
                iconColor: "#fa755a"
            },
            empty: {
                "::placeholder": {
                    color: "#6d6d6d"
                    }    
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
                    setFormStep(5)
                    //generate URI?
                    sendOrder(order)
                }
            } catch (error) {
                console.log("Error", error)
            }
        } else {
            console.log(error.message)
        }
    }

    return (
        <form id="stripe-input" onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
            <CardElement options={cardStyle }/>
            <div className='buttons-container'>
                <Button label='BACK' handler={() => setFormStep(3)}/>   
                <button className='button'>PAY £29</button>
            </div>
        </form>
    )
}

const sendOrder = async (order) => {
    console.log("sending", order)
    await axios.post("http://localhost:8080/order", order)
}

export default PaymentForm