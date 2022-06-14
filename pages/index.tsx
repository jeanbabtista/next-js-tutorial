import type { NextPage } from 'next'
import Head from 'next/head'
import { GetStaticProps } from 'next'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main>
        <p>Hello World</p>
      </main>
      <footer>Footer</footer>
    </div>
  )
}

// exporting this function enables static site generation (SSG),
// which means that Next JS will prerender this page at build time
export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      data: {
        recipes: [{ title: 'Pineapple Smoothie' }, { title: 'Recipe 2' }],
      },
    },
  }
}

export default Home
