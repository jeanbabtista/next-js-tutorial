import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'

import React from 'react'

import { IPost, IPostPageProps } from '../../types'
import NextUtil from '../../utils/NextUtil'

const Post: NextPage<IPostPageProps> = ({ post }) => {
  const router = useRouter()
  if (router.isFallback) return <div>Loading...</div>

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}

export default Post

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    // const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    // const posts: IPost[] = await response.json()

    const paths = [
      { params: { postId: '1' } },
      { params: { postId: '2' } },
      { params: { postId: '3' } },
      { params: { postId: '4' } },
      { params: { postId: '5' } },
    ]

    return NextUtil.getStaticPaths(paths, true)
  } catch (e) {
    console.error(e)
    return NextUtil.getStaticPaths([])
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const { params } = context
    if (!params?.postId) throw new Error('No postId')

    console.log(`Generating page with id ${params.postId}`)

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const post: IPost = await response.json()

    return NextUtil.getStaticProps('post', post)
  } catch (e) {
    return NextUtil.getStaticProps('post', null)
  }
}
