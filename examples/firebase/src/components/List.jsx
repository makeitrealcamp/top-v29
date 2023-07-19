import { getProducts } from '@lib/firebase'
import { useEffect, useState } from 'react'

import Item from './Item'

const List = ({ products = []}) => {
  useEffect(() => {
    getProducts()
  }, [])


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
