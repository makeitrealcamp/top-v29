/* eslint-disable */
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import CartList from './components/CartList';
import CheckoutForm from './components/CheckoutForm';

import { useAppContext } from './store';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Payment = () => {
  const { state } = useAppContext();
  return (
    <div>
      <div className="container">
        <div>
          <h1>Product List</h1>
          <CartList />
        </div>

        <div>
          <h2>Total</h2>
          <h3>Price: ${state.total}</h3>
        </div>
        <br />
        <br />

        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
