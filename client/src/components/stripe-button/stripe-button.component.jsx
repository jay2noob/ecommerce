import React from "react";
import StripeCheckout from "react-stripe-checkout";

import logo from "../../assets/original.svg";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_rcGKk6hk9vjBY27Dc8qdP0dj00S6Zd2Clw";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="JCommerce Ltd."
      billingAddress
      shippingAddress
      image={logo} //"https://sendeyo.com/up/d/f3eb2117da"
      description={`Your price is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
