import { NextPage } from 'next'
import { useRouter } from 'next/router'

const Reviews: NextPage = () => {
  const { productId } = useRouter().query
  return <h1>Reviews for product {productId}</h1>
}

export default Reviews
