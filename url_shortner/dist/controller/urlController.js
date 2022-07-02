"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlController = void 0;
const shortid_1 = __importDefault(require("shortid"));
const constrants_1 = require("../config/constrants");
const Url_1 = require("../dataBase/model/Url");
class UrlController {
    static async shortUrl(req, res) {
        const { originalUrl } = req.body;
        console.log(originalUrl);
        const existURL = await Url_1.URLmodel.findOne({ originalUrl: originalUrl });
        if (existURL) {
            res.json(existURL);
            return;
        }
        const hash = shortid_1.default.generate();
        const shortner = `${constrants_1.Config.API_URL}/${hash}`;
        const newURL = await Url_1.URLmodel.create({ hash, originalUrl, shortner });
        res.status(201).json(newURL);
    }
    static async Redirect(req, res) {
        const { hash } = req.params;
        const existURL = await Url_1.URLmodel.findOne({ hash });
        existURL
            ? res.redirect(existURL.originalUrl)
            : res.status(400).json({ error: "URL not found" });
    }
}
exports.UrlController = UrlController;
