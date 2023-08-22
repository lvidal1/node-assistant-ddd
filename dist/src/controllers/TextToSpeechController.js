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
const measure_1 = __importDefault(require("../utils/measure"));
const TextToSpeechServiceFactory_1 = require("../factories/TextToSpeechServiceFactory");
class TextToSpeechController {
    static repeat(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { text } = req.body;
            try {
                const service = TextToSpeechServiceFactory_1.TextToSpeechServiceFactory.createService(TextToSpeechServiceFactory_1.TTS_AMAZON);
                const m = measure_1.default.getInstance();
                // await measure.start();
                const audioStream = yield service.convertTextToSpeech(text);
                //await measure.end();
                yield m.save({
                    table: "tts_usage",
                    params: { service: "Amazon", total_characters: text.length },
                });
                //await measure.average();
                res.set("Content-Type", "audio/mpeg");
                audioStream.pipe(res);
            }
            catch (error) {
                console.log(error);
                res.status(500).send("Error generating speech from text");
            }
        });
    }
}
exports.default = TextToSpeechController;
