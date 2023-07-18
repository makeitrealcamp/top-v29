import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProductsPage = (props) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      const url = 'https://fakestoreapi.com/products'
      const response = await fetch(url)
      const data = await response.json()
      console.log("🚀 ~ file: index.jsx:11 ~ getProducts ~ data:", data)
      setProducts(data)
    }

    getProducts()
  }, [])


  return(
    <div>
      <h1>Products page</h1>

      <ul>
        {products.map((product) => {
          return(
            <li key={product.id}>
              {/* /products/:productId */}
              <Link href={`/products/${product.id}`}>
                <div>
                  <h2>{product.title}</h2>
                  <p>{product.description}</p>
                  <Image src={product.image} alt={product.title} width={300} height={200}/>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ProductsPage
