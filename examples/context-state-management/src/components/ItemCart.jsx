import PropTypes from 'prop-types';

import { useDispatch } from '../store';
import { removeProductFromCart } from '../store/actions';

const ItemCart = ({ item }) => {
  const { name, price, img } = item;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removeProductFromCart(item));
  };

  return (
    <li className="clearfix">
      <img src={img} alt={`product ${name}`} className="item-image" />
      <span className="item-name">{name}</span>
      <span className="item-price">${price}</span>
      <button onClick={handleClick}>X</button>
      {/* <span className="item-quantity">Quantity: {quantity}</span> */}
    </li>
  );
};

ItemCart.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
};

export default ItemCart;
