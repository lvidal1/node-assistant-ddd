"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TextToSpeechController_1 = __importDefault(require("../controllers/TextToSpeechController"));
const ttsRouter = (0, express_1.Router)();
ttsRouter.post("/repeat", TextToSpeechController_1.default.repeat);
exports.default = ttsRouter;
