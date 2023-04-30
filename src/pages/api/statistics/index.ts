import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next/types'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL + '/statistics'}`)

    res.status(200).json(response.data)
  } catch (err) {
    console.log(err)
  }
}
export default handler
