import PropTypes from 'prop-types';

import ItemCart from './ItemCart';

const CartList = ({ cart }) => {
  return (
    <ul className="shopping-cart-items">
      {cart.map((item, index) => (
        <ItemCart key={index} item={item} />
      ))}
    </ul>
  );
};

CartList.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
    }).isRequired,
  ),
};

CartList.defaultProps = {
  cart: [],
};

export default CartList;
