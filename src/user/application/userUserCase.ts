import { UserRepository } from '../domain/user.repository'
import { UserValue } from '../domain/user.value'

export class UserUseCase {
    constructor(private readonly userRepository: UserRepository) {}

    public async getDetailUser({ uuid }: { uuid: any }) {
        const user = await this.userRepository.findUserById(uuid)
        return user
    }

    public async registerUser({
        name,
        email,
        description,
    }: {
        name: string
        email: string
        description: string
    }) {
        const userValue = new UserValue({ name, email, description })
        const userCreated = await this.userRepository.registerUser(userValue)
        return userCreated
    }

    public registerUserAndNotify() {}
}
