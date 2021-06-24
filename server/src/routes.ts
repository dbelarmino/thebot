import express from "express";
import BotController from "./controllers/BotController";
import MessageController from "./controllers/MessageController";

const routes = express.Router();

routes.get("/", (req, res) => {
  return res.status(200).send("Server Running");
});

routes.get("/bots", BotController.index);
routes.get("/bots/:id", BotController.show);
routes.post("/bots", BotController.store);
routes.put("/bots/:id", BotController.update);
routes.delete("/bots/:id", BotController.delete);

routes.get("/messages", MessageController.index);
routes.get("/messages/:id", MessageController.show);
routes.post("/messages", MessageController.store);

export default routes;
