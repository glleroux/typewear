import React from 'react'
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import PaymentForm from './PaymentForm'

const PUBLIC_KEY = 'pk_live_51Iz0OeAlXiPETQsLoDSQMPHF7DxgFhSepMOxZHFA1kxZ5UwZbbdMLPH1xfTqtPt61ab7UUmY9W7VLYfZlSzxkTVD00Zz9hH0cv'
const stripeTestPromise = loadStripe(PUBLIC_KEY)

const StripeContainer = ({setFormStep, order}) => {

    return (
        <Elements stripe={stripeTestPromise}>
            <PaymentForm setFormStep={setFormStep} order={order}/>
        </Elements>
    )
}

export default StripeContainer