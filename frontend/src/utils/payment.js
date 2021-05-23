import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

exports.processToPayment = (sessionId) => {
  stripePromise.then(stripe => stripe.redirectToCheckout({
    sessionId: sessionId
  }))
    .catch(err => console.log(err));
}
