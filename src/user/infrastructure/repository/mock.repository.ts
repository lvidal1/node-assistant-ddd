import { UserEntity } from '../../domain/user.entity'
import { UserRepository } from '../../domain/user.repository'
import UserModel from '../models/user.schema'

const MOCK_USER = {
    name: 'Leo',
    email: 'lvidal',
    uuid: '0000-000-000-000',
    description: '',
}

export class MockRepository implements UserRepository {
    async findUserByEmail(email: string): Promise<UserEntity | null> {
        const user = MOCK_USER
        return user
    }
    async findUserById(uuid: string): Promise<UserEntity | null> {
        const user = MOCK_USER
        return user
    }
    async registerUser(userIn: UserEntity): Promise<UserEntity | null> {
        const user = MOCK_USER
        return user
    }
    async listUser(): Promise<UserEntity[] | null> {
        const users = [MOCK_USER, MOCK_USER, MOCK_USER]
        return users
    }
}
