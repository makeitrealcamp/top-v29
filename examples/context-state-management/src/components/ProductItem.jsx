const ProductItem = ({ product, onAddToCart }) => {
  const { name, price, img } = product;

  const addToCart = (product) => {
    onAddToCart(product);
  };

  return (
    <div className="product-card">
      <img src={img} alt={`product ${name}`} width="70" height="70" />
      <p className="item-name">{name}</p>
      <p className="item-price">${price}</p>
      <button
        onClick={() => {
          addToCart(product);
        }}
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductItem;
