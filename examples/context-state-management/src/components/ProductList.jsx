import { useEffect, useState } from 'react';

import ProductItem from './ProductItem';
import { getProducts } from '../service/products';
import { useAppState } from '../store';

const ProductList = () => {
  const { state, dispatch } = useAppState();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    //  VAMOS A SOLICITAR LOS PRODUCTOS
    const fetchProducts = async () => {
      try {
        dispatch({ type: 'SET_LOADING', payload: true });
        const products = await getProducts();

        setProducts(products);
        // dispatch({ type: 'SET_PRODUCTS', payload: products });
      } catch (error) {
        console.log(error);
      } finally {
        // disparar la accion del loading = false
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-container">
      {state.isLoading ? (
        <h1>Cargando...</h1>
      ) : (
        products.map((product, index) => {
          return <ProductItem key={index} product={product} />;
        })
      )}
    </div>
  );
};

export default ProductList;
