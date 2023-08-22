"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
class UserController {
    constructor(userUseCase) {
        this.userUseCase = userUseCase;
        this.getController = ({ query }, res) => __awaiter(this, void 0, void 0, function* () {
            const { uuid } = query;
            const user = yield this.userUseCase.getDetailUser({ uuid });
            res.send({ user });
        });
        this.insertController = ({ body }, res) => __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userUseCase.registerUser(body);
            res.send({ user });
        });
        this.userUseCase = userUseCase;
    }
}
exports.UserController = UserController;
