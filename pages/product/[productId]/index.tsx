import { NextPage } from 'next'
import { useRouter } from 'next/router'

import React from 'react'
import Navbar from '../../../components/Navbar'

const Product: NextPage = () => {
  const { productId } = useRouter().query

  return (
    <div>
      <Navbar />
      <h1>Product {productId}</h1>
    </div>
  )
}

export default Product
