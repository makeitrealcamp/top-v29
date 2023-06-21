import { products } from '../assets/data';

export async function getProducts() {
  // Hacemos una petición a la API -> axios.get('http://localhost:8080/API/products')
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 3000);
  });
}
