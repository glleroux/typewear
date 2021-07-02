import React from 'react'
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import PaymentForm from './PaymentForm'

const PUBLIC_KEY = 'pk_test_51Iz0OeAlXiPETQsLSE8tE9oogXXZgUMb5tFtVSZthbtC1vsVHQDXMowp1BV6ywNQlbCYzmEBykTUQ5amUfLNiwWb008Ul7KLHd'
const stripeTestPromise = loadStripe(PUBLIC_KEY)

const StripeContainer = ({setFormStep, order}) => {

    const fonts = {
            src: "url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap')",
            family: "roboto-mono",
          }

    return (
        <Elements stripe={stripeTestPromise} fonts={fonts}>
            <PaymentForm setFormStep={setFormStep} order={order}/>
        </Elements>
    )
}

export default StripeContainer