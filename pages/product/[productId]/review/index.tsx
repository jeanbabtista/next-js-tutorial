import { NextPage } from 'next'
import { useRouter } from 'next/router'

import React from 'react'
import Navbar from '../../../../components/Navbar'

const Reviews: NextPage = () => {
  const { productId } = useRouter().query

  return (
    <div>
      <Navbar />
      <h1>Reviews for product {productId}</h1>
    </div>
  )
}

export default Reviews
