import { NextPage, GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import Navbar from '../components/Navbar'
import NavigationUtil from '../utils/NavigationUtil'

const Home: NextPage = () => {
  const router = useRouter()
  const handleClick = () => router.push(NavigationUtil.getProductsUrl().url)

  return (
    <div>
      <Navbar />
      <h1>Home Page</h1>
      <button onClick={handleClick}>Place Order</button>
    </div>
  )
}

export default Home
