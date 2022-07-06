import { GetStaticProps, NextPage } from 'next'

import Navbar from '../components/Navbar'

const About: NextPage<AboutProps> = ({ posts }) => {
  return (
    <div>
      <Navbar />
      <h1>About</h1>
      {posts.map((post: Post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
        </div>
      ))}
    </div>
  )
}

interface AboutProps {
  posts: Post[]
}

type Post = {
  id: string
  title: string
}

export const getStaticProps: GetStaticProps = () => {
  const posts: Post[] = [
    { id: '1', title: 'Pineapple Smoothie' },
    { id: '2', title: 'Recipe 2' },
  ]

  return {
    props: {
      posts,
    },
  }
}

export default About
