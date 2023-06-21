import { useEffect } from 'react';

import ProductItem from './ProductItem';
import { getProducts } from '../service/products';

const ProductList = ({ products = [], onAddToCart }) => {
  return (
    <div className="product-container">
      {products.map((product, index) => {
        return (
          <ProductItem
            key={index}
            product={product}
            onAddToCart={onAddToCart}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
