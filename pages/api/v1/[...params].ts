import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const params = req.query.params as string[]
  res.status(200).json({ params })
}

export default handler
