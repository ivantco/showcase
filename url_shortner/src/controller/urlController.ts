import { Request, Response } from "express";
import shortid from "shortid";
import { Config } from "../config/constrants";
import { URLmodel } from "../dataBase/model/Url";

export class UrlController {
  static async shortUrl(req: Request, res: Response): Promise<void> {
    const { originalUrl } = req.body;
    console.log(originalUrl);
    const existURL = await URLmodel.findOne({ originalUrl: originalUrl });

    if (existURL) {
      res.json(existURL);
      return;
    }

    const hash = shortid.generate();
    const shortner = `${Config.API_URL}/${hash}`;
    const newURL = await URLmodel.create({ hash, originalUrl, shortner });
    res.status(201).json(newURL);
  }

  static async Redirect(req: Request, res: Response): Promise<void> {
    const { hash } = req.params;
    const existURL = await URLmodel.findOne({ hash });

    existURL
      ? res.redirect(existURL.originalUrl!)
      : res.status(400).json({ error: "URL not found" });
  }
}
