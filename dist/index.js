"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const user_app_1 = __importDefault(require("./source/user/user.app"));
dotenv_1.default.config();
const app = new user_app_1.default(parseInt(process.env.PORT || "8000"));
app.listen();
