import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { NextPageWithLayout } from '../_app'
import { IComment } from '../../types'
import DataUtil from '../../utils/DataUtil'
import NextUtil from '../../utils/NextUtil'
import Layout from '../../components/layout'

interface ICommentProps {
  comment: IComment
}

const Comment: NextPageWithLayout = ({ comment }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <h1>Comment {comment.id}</h1>
      <p>{comment.body}</p>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return NextUtil.getStaticPaths([{ params: { commentId: '1' } }, { params: { commentId: '2' } }, { params: { commentId: '3' } }])
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) return NextUtil.getStaticProps('comment', { comment: null })

  /* Don't do this:
    const response = await fetch(`http:localhost:3000/api/v1/comments/${params.commentId}`)
    const data = await response.json()
    return NextUtil.getStaticProps('comment', { comment: data })
    */
  const commentId = parseInt(params.commentId as string)
  const comments = DataUtil.getComments()
  const comment = comments.find((comment) => comment.id === commentId)

  if (!comment) return NextUtil.getStaticProps('comment', { comment: null })
  return NextUtil.getStaticProps('comment', { comment })
}

Comment.getLayout = (page) => <Layout title={`Comment fetched by id`}>{page}</Layout>

export default Comment
