"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextToSpeechServiceFactory = exports.TTS_AMAZON = void 0;
const AmazonPolly_1 = __importDefault(require("../services/TextToSpeech/providers/AmazonPolly"));
exports.TTS_AMAZON = "AmazonPolly";
class TextToSpeechServiceFactory {
    static createService(serviceName) {
        switch (serviceName) {
            case exports.TTS_AMAZON:
                return AmazonPolly_1.default.getInstance();
            default:
                throw new Error(`Unsupported service name: ${serviceName}`);
        }
    }
}
exports.TextToSpeechServiceFactory = TextToSpeechServiceFactory;
