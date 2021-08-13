import { React, useState } from 'react';
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import Button from './Button'
import axios from 'axios'

const order = {
    "Font": "pattaya"
}

const sendOrder = async (order) => {

    console.log("sending", order)

    const {font, size} = order
    const {name, email, address, city, state, zip} = order.info
    const shippingAddress = `${address}, ${city}, ${state}, ${zip}` 

    await axios.post(`https://api.airtable.com/v0/app6svFgRrfkw1py9/Orders`, {
        "fields": {
            "Name": name,
            "Email": email,
            "Font": font,
            "Size": size,
            "Address": shippingAddress
        }
    }, {
        headers: {
            'Authorization': "Bearer key8WopV2OEIOtCou"
        }
    })
}

const PaymentForm = ({ setFormStep, order, options }) => {

    const [success, setSuccess] = useState(false)
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
                    setSuccess(true)
                    setFormStep(5)
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
                    <button className='button'><p className='button-text'>PAY £29</p></button>
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