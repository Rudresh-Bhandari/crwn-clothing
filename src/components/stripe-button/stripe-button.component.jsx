import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) =>{
    const priceForStripe = price*100;
    const publishableKey= 'pk_test_51KVp8HSFGXFr2xClMsoP9Msn4yqGhmcIiPBOmqwNDiHyXMDG9QhHy5K26fnuQqbYJt9Zs1tmKHZqX1IQ7GDPM7bO00qN49kIz8'

const onToken=token=>{
    console.log(token);
    alert('Payment is Successful')
}

    return(
        <StripeCheckout
            label='Pay Now'
            name='LikeMike Clothing Ltd.'
            billingAddress
            shippingAddress
            image=''
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;