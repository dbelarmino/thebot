import { Schema, model, Document } from "mongoose";
import { v4 as uuidv4 } from "uuid";

import BotInterface from "../interfaces/Bot";

export interface BotModel extends BotInterface, Document {}

const BotSchema = new Schema(
  {
    id: {
      type: String,
      unique: true,
    },
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

BotSchema.pre("save", async function (next) {
  this.id = uuidv4();

  next();
});

export default model<BotModel>("Bot", BotSchema);
