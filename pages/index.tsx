import { NextPage, GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import Navbar from '../components/Navbar'
import urls from '../utils/navlinks'

const Home: NextPage<HomeProps> = ({ recipes }) => {
  const router = useRouter()

  const handleClick = () => {
    console.log('placing order')
    router.push(urls.products())
  }

  return (
    <div>
      <Navbar />
      <h1>Home Page</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>{recipe.title}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Place Order</button>
    </div>
  )
}

interface HomeProps {
  recipes: Recipe[]
}

interface Recipe {
  id: string | number
  title: string
}

// exporting this function enables static site generation (SSG),
// which means that Next JS will prerender this page at build time
export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      recipes: [
        { id: 1, title: 'Pineapple Smoothie' },
        { id: '2', title: 'Banana Shake' },
      ],
    },
  }
}

export default Home
