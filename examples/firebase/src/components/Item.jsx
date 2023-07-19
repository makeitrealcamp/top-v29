

const Item = ({ product }) => {
  return(
    <li>
      <h3>{product.name}</h3>
      <p>{product.price}</p>
    </li>
  )
}

export default Item
