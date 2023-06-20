import { useAppContext } from "../store"

import ItemCart from "./ItemCart"

const CartList = () => {
  const { state } = useAppContext();

  return(
    <ul className="shopping-cart-items">
      {
        state.cart.map((item, index) => (
          <ItemCart key={index} item={item} />
        ))
      }
    </ul>
  )
}

export default CartList
