import { GetStaticProps, NextPage, InferGetStaticPropsType } from 'next'

type Post = {
  id: string
  title: string
}

const About: NextPage = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <h1>About</h1>
      {posts.map((post: Post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
        </div>
      ))}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
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
