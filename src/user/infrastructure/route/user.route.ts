import { Router } from 'express'
import { MockRepository } from '../repository/mock.repository'
import { UserUseCase } from '../../application/userUserCase'
import { UserController } from '../controller/user.ctrl'

const userRoute = Router()

// Inversify
const userRepository = new MockRepository()

const userUseCase = new UserUseCase(userRepository)

const userController = new UserController(userUseCase)

userRoute.get('/user', userController.getController)
userRoute.post('/user', userController.insertController)

export default userRoute
