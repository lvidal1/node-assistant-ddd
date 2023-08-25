import { Request, Response } from 'express'
import { controller, httpGet } from 'inversify-express-utils'

@controller('/')
export class HubController {
    constructor() {}

    @httpGet('/')
    welcome(req: Request, res: Response) {
        res.send({ message: 'Welcome to the hub' })
    }

    @httpGet('ask')
    askQuestion(req: Request, res: Response) {
        res.send({ message: 'Ask' })
    }
}
