import { useState } from 'react';

import Navbar from './components/Navbar';
import ShoppingCart from './components/ShoppingCart';
import ProductList from './components/ProductList';

import { products as data } from './assets/data';

import './App.scss';

function App() {
  const [products, setProducts] = useState(data);
  const [cart, setCart] = useState([]); // [product1, product2, ...

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <>
      <Navbar cart={cart} />
      <div className="container">
        <div className="shopping-container">
          <ShoppingCart cart={cart} />
        </div>
        <div>
          <h1>Product List</h1>
          <ProductList products={products} onAddToCart={handleAddToCart} />
        </div>
      </div>
    </>
  );
}

export default App;
