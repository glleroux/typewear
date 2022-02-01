import React from 'react'
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import PaymentForm from './PaymentForm'

const PUBLIC_KEY = 'pk_live_51Iz0OeAlXiPETQsLoDSQMPHF7DxgFhSepMOxZHFA1kxZ5UwZbbdMLPH1xfTqtPt61ab7UUmY9W7VLYfZlSzxkTVD00Zz9hH0cv'
// const PUBLIC_KEY = 'pk_test_51Iz0OeAlXiPETQsLSE8tE9oogXXZgUMb5tFtVSZthbtC1vsVHQDXMowp1BV6ywNQlbCYzmEBykTUQ5amUfLNiwWb008Ul7KLHd'
const stripeTestPromise = loadStripe(PUBLIC_KEY)

const StripeContainer = ({setFormStep, order, setPaymentSuccess }) => {

    return (
        <Elements stripe={stripeTestPromise}>
            <PaymentForm setFormStep={setFormStep} order={order} setPaymentSuccess={setPaymentSuccess}/>
        </Elements>
    )
}

export default StripeContainer