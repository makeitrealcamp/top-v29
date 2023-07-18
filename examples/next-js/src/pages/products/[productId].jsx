import { useRouter } from 'next/router';

const ProductDetailPage = (props) => {
  const { query } = useRouter()




  return(
    <div>
      <h1>
        Product detail page {query.productId}
      </h1>
    </div>
  )
}

export default ProductDetailPage
