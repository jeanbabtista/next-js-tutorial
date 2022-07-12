import { NextApiRequest, NextApiResponse, NextApiHandler } from 'next'
import DataUtil from '../../../../utils/DataUtil'

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const id = parseInt(req.query.commentId as string)

  switch (req.method) {
    case 'GET':
      console.log(`GET /api/v1/comments/${id}`)
      return handleGetRequest(req, res, id)
    case 'DELETE':
      console.log(`DELETE /api/v1/comments/${id}`)
      return handleDeleteRequest(req, res, id)
    default:
      return res.status(405).json({ error: 'Method not allowed' })
  }
}

const handleGetRequest = async (req: NextApiRequest, res: NextApiResponse, id: number) => {
  try {
    const comments = DataUtil.getComments()
    const comment = comments.find((c) => c.id === id)
    if (!comment) return res.status(404).json({ error: 'Comment not found' })

    return res.status(200).json({ comment })
  } catch (error) {
    const e = error as Error
    return res.status(500).json({ error: e.message })
  }
}

const handleDeleteRequest = async (req: NextApiRequest, res: NextApiResponse, id: number) => {
  try {
    const comments = DataUtil.getComments()
    const comment = comments.find((c) => c.id === id)
    if (!comment) return res.status(404).json({ error: 'Error deleting a comment: comment not found' })

    const filtered = comments.map((c) => (c.id !== id ? c : null)).filter((c) => c !== null)
    return res.status(200).json({ deleted: comment, comments: filtered })
  } catch (error) {
    const e = error as Error
    return res.status(500).json({ error: e.message })
  }
}

export default handler
