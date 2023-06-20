import { useNavigate } from 'react-router-dom'

const CheckoutButton = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/checkout')
  }

  return(
    <button className="button" onClick={handleClick}>Checkout</button>
  )
}

export default CheckoutButton
