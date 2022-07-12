import { NextPage } from 'next'
import { useRouter } from 'next/router'

const Product: NextPage = () => {
  const { productId } = useRouter().query
  return <h1>Product {productId}</h1>
}

export default Product
