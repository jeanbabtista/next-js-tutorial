import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import { IComment } from '../../../../types'

let comments: IComment[]
;(async () => {
  const response = await fetch(`https://dummyjson.com/comments`)
  const data = await response.json()
  comments = data.comments
})()

interface SuccessResponse {
  comments: IComment[]
}

interface FailureResponse {
  error: string
}

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse<SuccessResponse | FailureResponse>) => {
  switch (req.method) {
    case 'GET':
      console.log('GET /api/v1/comments')
      return handleGetRequest(req, res)
    case 'POST':
      console.log('POST /api/v1/comments')
      return handlePostRequest(req, res)
    default:
      return res.status(405).json({ error: 'Method not allowed' })
  }
}

const handleGetRequest = async (req: NextApiRequest, res: NextApiResponse<SuccessResponse | FailureResponse>) => {
  try {
    return res.status(200).json({ comments })
  } catch (error) {
    const e = error as Error
    return res.status(500).json({ error: e.message })
  }
}

const handlePostRequest = async (req: NextApiRequest, res: NextApiResponse<SuccessResponse | FailureResponse>) => {
  try {
    const body: string = req.body.body
    if (!body) return res.status(400).json({ error: 'Body is required' })

    const comment: IComment = { id: Date.now(), body }
    comments.push(comment)

    return res.status(200).json({ comments })
  } catch (error) {
    const e = error as Error
    return res.status(500).json({ error: e.message })
  }
}

export { comments }
export default handler
