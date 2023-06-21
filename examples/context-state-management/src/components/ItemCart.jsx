import PropTypes from 'prop-types';

const ItemCart = ({ item }) => {
  const { name, price, quantity, img } = item;

  return (
    <li className="clearfix">
      <img src={img} alt={`product ${name}`} className="item-image" />
      <span className="item-name">{name}</span>
      <span className="item-price">${price}</span>
      <span className="item-quantity">Quantity: {quantity}</span>
    </li>
  );
};

ItemCart.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};

export default ItemCart;
