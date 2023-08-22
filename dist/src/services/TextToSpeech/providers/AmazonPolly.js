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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const stream_1 = require("stream");
const aws_sdk_1 = __importDefault(require("aws-sdk"));
class AmazonPolly {
    constructor() {
        this.polly = new aws_sdk_1.default.Polly({
            region: process.env.AWS_REGION,
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        });
    }
    static getInstance() {
        if (!AmazonPolly.instance) {
            AmazonPolly.instance = new AmazonPolly();
        }
        return AmazonPolly.instance;
    }
    convertTextToSpeech(text, language = "es-MX") {
        return __awaiter(this, void 0, void 0, function* () {
            const params = {
                Text: text,
                OutputFormat: "mp3",
                TextType: "text",
                VoiceId: "Mia",
                LanguageCode: language,
            };
            const data = yield this.polly.synthesizeSpeech(params).promise();
            return new stream_1.Readable({
                read() {
                    this.push(data.AudioStream);
                    this.push(null);
                },
            });
        });
    }
}
exports.default = AmazonPolly;
