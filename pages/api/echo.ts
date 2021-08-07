import {NextApiRequest, NextApiResponse} from 'next'

type Data = {
    message: string
}

export default function echo(req: NextApiRequest, res: NextApiResponse<Data>) {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({
        message: req.query.message ?? 'Base Message'
    }))
}
