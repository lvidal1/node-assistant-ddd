import { Request, Response } from "express";
import { UserUseCase } from "../../application/userUserCase";

export class UserController {
    constructor(private userUseCase: UserUseCase) {
        this.userUseCase = userUseCase;
    }

    public getController = async ({query}:Request, res: Response) => {
        const { uuid } = query;
        const user = await this.userUseCase.getDetailUser({uuid})
        res.send({user})
    }

    public insertController = async ({body}:Request, res: Response) => {
        const user = await this.userUseCase.registerUser(body)
        res.send({user})
    }
}