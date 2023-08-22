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
const mongodb_1 = require("mongodb");
class MongoDB {
    constructor(uri, dbName) {
        this.client = new mongodb_1.MongoClient(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        this.dbName = dbName;
    }
    static getInstance() {
        if (!MongoDB.instance) {
            const uri = process.env.MONGO_URI;
            const dbName = process.env.MONGO_DB_NAME;
            if (!uri || !dbName) {
                throw new Error("MongoDB URI and database name must be provided in environment variables.");
            }
            MongoDB.instance = new MongoDB(uri, dbName);
        }
        return MongoDB.instance;
    }
    createTable(collectionName) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.client.connect();
                const db = this.client.db(this.dbName);
                yield db.createCollection(collectionName);
            }
            finally {
                yield this.client.close();
            }
        });
    }
    add(collection, usage) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.client.connect();
                const db = this.client.db(this.dbName);
                const date = new Date().toISOString().slice(0, 16).replace("T", " ");
                const result = yield db
                    .collection(collection)
                    .insertOne(Object.assign(Object.assign({}, usage), { date }));
                if (!result.insertedId) {
                    throw new Error("Failed to add usage record. " + JSON.stringify(result));
                }
                return "Usage record added successfully.";
            }
            finally {
                yield this.client.close();
            }
        });
    }
}
exports.default = MongoDB;
