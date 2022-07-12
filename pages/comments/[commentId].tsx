import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { IComment } from '../../types'
import DataUtil from '../../utils/DataUtil'
import NextUtil from '../../utils/NextUtil'

const Comment: NextPage<{ comment: IComment }> = ({ comment }) => {
  return (
    <div>
      <h1>Comment {comment.id}</h1>
      <p>{comment.body}</p>
    </div>
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

export default Comment
