import { useEffect } from 'react';

import ProductItem from './ProductItem';
import { getProducts } from '../service/products';
import { useAppContext } from '../store'

const ProductList = () => {
  const { state, dispatch } = useAppContext()

  useEffect(() => {
    const fetchData = async () => {
      const products = await getProducts();
      // FSA -> Flux Standard Action
      dispatch({ type: 'SET_PRODUCTS', payload: products })
    }

    fetchData();
  }, [])

  return(
    <div className="product-container">
      {
        state.products.map((product, index) => {
          return (
            <ProductItem key={index} product={product} />
          )
        })
      }

    </div>
  )
}

export default ProductList
