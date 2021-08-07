import {NextApiRequest, NextApiResponse} from 'next'

type Data = {
    yourId: string | string[]
}

export default function getById(req: NextApiRequest, res: NextApiResponse<Data>) {
    // res.statusCode = 200
    // res.setHeader('Content-Type', 'application/json')
    // res.end(req.query.id)
    res.json({yourId: req.query.id})
}
