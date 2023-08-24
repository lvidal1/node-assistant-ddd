import { UserEntity } from '../../domain/user.entity'
import { UserRepository } from '../../domain/user.repository'
import UserModel from '../models/user.schema'

export class MongoRepository implements UserRepository {
    async findUserByEmail(): Promise<UserEntity | null> {
        throw new Error('Method not implemented.')
    }
    async findUserById(uuid: string): Promise<any> {
        const user = await UserModel.findOne({ uuid })
        return user
    }
    async registerUser(userIn: UserEntity): Promise<UserEntity | null> {
        const user = await UserModel.create(userIn)
        return user
    }
    async listUser(): Promise<UserEntity[] | null> {
        const users = await UserModel.find()
        return users
    }
}
