import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51GviG1DuPDXvo0LimBM7esvuBG7mdAQXFs93O9PiQdKJ5lG8grfBUQe1ODbel84GhE4JMcESi4ziQAWNYdVQ9u5D00r6FInLeW";

    const onToken = token => {
        console.log(token);
        alert('Payment Succesful!');
      };

  return (
    <StripeCheckout
    label='Pay Now'
      name="Pizza hut Co."
      token={onToken}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      image='https://www.pizzahut.com.pk/assets/images/ph-logo.png'
      stripeKey={publishableKey}
      panelLabel='Pay Now'
      shippingAddress
      billingAddress
    />
  );
};

export default StripeCheckoutButton;