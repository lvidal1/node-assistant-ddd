import { Request, Response } from 'express'
import operationAdapter from '../../../adapters/operation.adapter'

export class HubController {
    constructor() {}

    public welcome = (req: Request, res: Response) => {
        res.send({ message: 'Welcome to the hub' })
    }

    public askQuestion = (req: Request, res: Response) => {
        const answer = operationAdapter.askQuestion()
        res.send({ message: answer })
    }
}
