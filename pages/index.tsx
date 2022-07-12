import { NextPage, GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import NavigationUtil from '../utils/NavigationUtil'

const Home: NextPage = () => {
  const router = useRouter()
  const handleClick = () => router.push(NavigationUtil.getProductsUrl().url)

  return (
    <>
      <h1>Home Page</h1>
      <button onClick={handleClick}>Place Order</button>
      <p>Environment public ID: {process.env.NEXT_PUBLIC_ID}</p>
    </>
  )
}

export default Home
