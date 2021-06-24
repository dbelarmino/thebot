import { Schema, model, Document } from "mongoose";
import { v4 as uuidv4 } from "uuid";

import MessageInterface from "../interfaces/Message";

export interface MessageModel extends MessageInterface, Document {}

const MessageSchema = new Schema(
  {
    id: {
      type: String,
      unique: true,
    },
    conversationId: {
      type: String,
      unique: false,
    },
    from: {
      type: String,
      required: true,
      unique: false,
    },
    to: {
      type: String,
      required: true,
      unique: false,
    },
    text: {
      type: String,
      required: true,
      unique: false,
    },
  },
  {
    timestamps: true,
  }
);

MessageSchema.pre("save", async function (next) {
  this.id = uuidv4();

  next();
});

export default model<MessageModel>("Message", MessageSchema);
