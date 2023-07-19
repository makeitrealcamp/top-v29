import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProductsPage = ({ products = [] }) => {

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

// export async function getServerSideProps() {
//   const url = 'http://localhost:3000/api/products'
//   const response = await fetch(url)
//   const data = await response.json()

//   return {
//     props: {
//       products: data
//     }
//   }
// }

export async function getStaticProps() {
  const url = 'https://fakestoreapi.com/products'
  const response = await fetch(url)
  const data = await response.json()

  return {
    props: {
      products: data
    }
  }
}
