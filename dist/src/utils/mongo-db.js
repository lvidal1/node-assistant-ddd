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
exports.updateTableThroughput = exports.createTable = void 0;
const mongodb_1 = require("mongodb");
function createTable(uri, dbName, collectionName) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new mongodb_1.MongoClient(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        try {
            yield client.connect();
            const db = client.db(dbName);
            yield db.createCollection(collectionName);
        }
        finally {
            yield client.close();
        }
    });
}
exports.createTable = createTable;
function updateTableThroughput(uri, dbName, collectionName, readCapacityUnits, writeCapacityUnits) {
    return __awaiter(this, void 0, void 0, function* () {
        // This function is not applicable to MongoDB
        throw new Error("updateTableThroughput is not applicable to MongoDB");
    });
}
exports.updateTableThroughput = updateTableThroughput;
