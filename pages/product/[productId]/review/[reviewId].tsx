import { NextPage } from 'next'
import { useRouter } from 'next/router'

import React from 'react'
import Navbar from '../../../../components/navbar'

const ReviewProduct: NextPage = () => {
  const { productId, reviewId } = useRouter().query

  return (
    <h1>
      <Navbar />
      Reviewing product {productId} with review {reviewId}
    </h1>
  )
}

export default ReviewProduct
