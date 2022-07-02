import "dotenv/config";
import express from "express";
import { UrlController } from "./controller/urlController";
import { DBconection } from "./dataBase/db";

const app = express();

app.listen(5000, () => {
  console.log("app executando na porta 5000");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

DBconection.Conection();

app.post("/shortner", UrlController.shortUrl);
app.get("/:hash", UrlController.Redirect);
