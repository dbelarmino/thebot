import dotenv from "dotenv";

import express from "express";
import cors from "cors";
import routes from "./routes";
import mongoose from "mongoose";

class App {
  express = express();

  constructor() {
    dotenv.config({
      path: process.env.NODE_ENV === "test" ? ".env.test" : ".env",
    });

    this.middlewares();
    this.database();
  }

  middlewares() {
    this.express.use(
      cors({
        origin: "*",
      })
    );
    this.express.use(express.json());
    this.express.use(routes);
  }

  private database(): void {
    const {
      MONGO_USERNAME,
      MONGO_PASSWORD,
      MONGO_HOSTNAME,
      MONGO_PORT,
      MONGO_DB,
    } = process.env;

    mongoose.connect(
      `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`,
      { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
    );
  }
}

export default new App().express;
