"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const urlController_1 = require("./controller/urlController");
const db_1 = require("./dataBase/db");
const app = (0, express_1.default)();
app.listen(5000, () => {
    console.log("app executando na porta 5000");
});
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
db_1.DBconection.Conection();
app.post("/shortner", urlController_1.UrlController.shortUrl);
app.get("/:hash", urlController_1.UrlController.Redirect);
