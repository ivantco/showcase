"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBconection = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const constrants_1 = require("../config/constrants");
class DBconection {
    static async Conection() {
        try {
            await mongoose_1.default.connect(constrants_1.Config.MONGO_CONNECTION);
            console.log("db connected");
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.DBconection = DBconection;
