import { useAppContext } from '../store'

const Badge = () => {
  const { state } = useAppContext();
  return(
    <span className="badge">{state.cart.length}</span>
  )
}

export default Badge
