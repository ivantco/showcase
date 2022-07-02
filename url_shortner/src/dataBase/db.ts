import mongoose from "mongoose";
import { Config } from "../config/constrants";

export class DBconection {
  static async Conection() {
    try {
      await mongoose.connect(Config.MONGO_CONNECTION!);
      console.log("db connected");
    } catch (error) {
      console.log(error);
    }
  }
}
