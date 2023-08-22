"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mock_repository_1 = require("../repository/mock.repository");
const userUserCase_1 = require("../../application/userUserCase");
const user_ctrl_1 = require("../controller/user.ctrl");
const userRoute = (0, express_1.Router)();
// Inversify
const userRepository = new mock_repository_1.MockRepository();
const userUseCase = new userUserCase_1.UserUseCase(userRepository);
const userController = new user_ctrl_1.UserController(userUseCase);
userRoute.get('/user', userController.getController);
userRoute.post('/user', userController.insertController);
exports.default = userRoute;
