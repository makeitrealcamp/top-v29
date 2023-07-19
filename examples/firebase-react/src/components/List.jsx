import Item from './Item'

const List = ({ products = []}) => {

  return(
    <ul>
      {
        products.map((product, index) => (
          <Item key={index} product={product} />
        ))
      }
    </ul>
  )
}

export default List
