import { NextPage } from 'next'
import { useRouter } from 'next/router'

const ReviewProduct: NextPage = () => {
  const { productId, reviewId } = useRouter().query

  return (
    <h1>
      Reviewing product {productId} with review {reviewId}
    </h1>
  )
}

export default ReviewProduct
