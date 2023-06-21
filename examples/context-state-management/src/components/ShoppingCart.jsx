import Badge from './Badge';
import Total from './Total';
import CartList from './CartList';
import CheckoutButton from './CheckoutButton';
import { useAppState } from '../store';

const ShoppingCart = () => {
  const { state } = useAppState();
  return (
    <div className="shopping-cart">
      <div className="shopping-cart-header">
        <i className="fa fa-shopping-cart cart-icon"></i>
        <Badge />
        <Total />
      </div>

      <CartList cart={state.cart} />

      <CheckoutButton />
    </div>
  );
};

export default ShoppingCart;
