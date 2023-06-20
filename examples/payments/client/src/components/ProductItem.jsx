import { useAppContext } from '../store'

const ProductItem = ({ product }) => {
  const { name, price, img } = product
  const { dispatch } = useAppContext()

  const addToCart = (product) => {
    // FSA -> Flux Standard Action
    dispatch({ type: 'ADD_TO_CART', payload: product })
  }

  return(
    <div className="product-card">
      <img src={img} alt={`product ${name}`} width="70" height="70" />
      <p className="item-name">{name}</p>
      <p className="item-price">${price}</p>
      <button onClick={() => { addToCart(product) }}>Add to cart</button>
    </div>
  )
}

export default ProductItem
