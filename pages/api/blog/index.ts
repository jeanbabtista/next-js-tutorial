import { NextApiRequest, NextApiResponse } from 'next'

interface Data {
  page: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ page: 'blog' })
}
