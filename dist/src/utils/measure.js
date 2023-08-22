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
const mongo_1 = __importDefault(require("../db/mongo"));
class Measure {
    constructor() {
        this.startTime = 0;
        this.endTime = 0;
        this.requestTime = 0;
    }
    static getInstance() {
        if (!Measure.instance) {
            Measure.instance = new Measure();
        }
        return Measure.instance;
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            this.startTime = Date.now();
            return this;
        });
    }
    end() {
        return __awaiter(this, void 0, void 0, function* () {
            this.endTime = Date.now();
            this.requestTime = this.endTime - this.startTime;
            return this;
        });
    }
    save({ table, params }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                mongo_1.default.getInstance().add(table, Object.assign(Object.assign({}, params), { time: this.requestTime }));
            }
            catch (error) {
                console.log(error);
                throw new Error("Error on saving measure");
            }
            return this;
        });
    }
}
exports.default = Measure;
