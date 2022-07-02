import { prop, getModelForClass } from "@typegoose/typegoose";

export class URL {
  @prop({ type: String })
  public hash?: string;

  @prop({ type: String })
  public originalUrl?: string;

  @prop({ type: String })
  public shortner?: string;
}

export const URLmodel = getModelForClass(URL);
