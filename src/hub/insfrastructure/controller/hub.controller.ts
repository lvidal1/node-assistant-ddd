import { Request, Response } from 'express'

export class HubController {
    constructor() {}

    public welcome = (req: Request, res: Response) => {
        res.send({ message: 'Welcome to the hub' })
    }
}
