import PropTypes from 'prop-types';

import { useDispatch } from '../store';
import { addProductToCart } from '../store/actions';

const ProductItem = ({ product }) => {
  const { name, price, img } = product;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addProductToCart(product));
  };

  return (
    <div className="product-card">
      <img src={img} alt={`product ${name}`} width="70" height="70" />
      <p className="item-name">{name}</p>
      <p className="item-price">${price}</p>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductItem;
