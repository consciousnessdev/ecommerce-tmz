import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51KKgHnG2IRHe0Vm6B3WJfNYpeFCIFjsdXa5xuRncxyetZp1bvFvbkjQhggkXzfesSGflGQNQePX4qBh93kiB8eWw00k9gAUCZ3';
  const onToken = token => {
    console.log(token);
    alert('Paymen Successful');
  }
  return <StripeCheckout
    label="Pay Now"
    name="CRWN Clothing"
    billingAddress
    shippingAddress
    image="https://svgshare.com/i/CUz.svg"
    description={`Your total is $${price}`}
    amount={priceForStripe}
    panelLabel="Pay Now"
    token={onToken}
    stripeKey={publishableKey}
  />;
};

export default StripeCheckoutButton;
