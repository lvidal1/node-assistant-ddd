"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    uuid: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    description: { type: String, required: false }
});
const UserModel = (0, mongoose_1.model)('User', UserSchema);
exports.default = UserModel;
