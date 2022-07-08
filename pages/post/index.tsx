import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Link from 'next/link'

import NextUtil from '../../utils/NextUtil'
import { IPost, IPostsPageProps } from '../../types'
import NavigationUtil from '../../utils/NavigationUtil'

const Posts: NextPage<IPostsPageProps> = ({ posts }) => {
  return (
    <div>
      <h1>Posts</h1>

      <ol>
        {posts.map((post: IPost) => (
          <li key={post.id}>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
            <Link href={NavigationUtil.getPostByIdUrl(post.id).url}>Info</Link>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default Posts

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const posts = await response.json()

    return NextUtil.getStaticProps('posts', posts)
  } catch (e) {
    return NextUtil.getStaticProps('posts', [])
  }
}
