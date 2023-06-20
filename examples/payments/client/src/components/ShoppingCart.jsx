import Badge from "./Badge"
import Total from "./Total"
import CartList from "./CartList"
import CheckoutButton from "./CheckoutButton"

const ShoppingCart = (props) => {
  return(
    <div className="shopping-cart">
      <div className="shopping-cart-header">
        <i className="fa fa-shopping-cart cart-icon"></i>
        <Badge />
        <Total />
      </div>

      <CartList />

      <CheckoutButton />
    </div>
  )
}

export default ShoppingCart
