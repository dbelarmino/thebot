import { Request, Response } from "express";

import Bot from "../models/Bot";

class BotController {
  public async index(req: Request, res: Response): Promise<Response> {
    try {
      const bots = await Bot.find().select(["id", "name"]);

      const botsSerialization = bots.map((bot) => {
        return {
          id: bot.id,
          name: bot.name,
        };
      });

      return res.status(200).json(botsSerialization);
    } catch (error) {
      return res
        .status(400)
        .json({ message: "Houve um problema ao buscar os bots" });
    }
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      const bot = await Bot.findOne({ id });

      const botSerialization = {
        id: bot?.id,
        name: bot?.name,
      };

      return res.status(200).json(botSerialization);
    } catch (error) {
      return res
        .status(400)
        .json({ message: "Houve um problema ao buscar o bot" });
    }
  }

  public async store(req: Request, res: Response): Promise<Response> {
    const { name } = req.body;

    try {
      const foundBot = await Bot.findOne({ name });

      if (foundBot)
        return res.status(200).json({ message: "Esse bot já existe" });

      const bot = await Bot.create({ name });

      const botSerialization = {
        id: bot.id,
        name: bot.name,
      };

      return res.status(201).json(botSerialization);
    } catch (error) {
      return res
        .status(400)
        .json({ message: "Houve um problema ao cadastrar o bot" });
    }
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { name } = req.body;

    try {
      const bot = await Bot.findOne({ id });

      if (!bot) return res.status(200).json({ message: "Esse bot não existe" });

      await Bot.updateOne({ id }, { name });

      const botSerialization = {
        id,
        name,
      };

      return res.status(200).json(botSerialization);
    } catch (error) {
      return res
        .status(400)
        .json({ message: "Houve um problema ao atualizar o bot" });
    }
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      const bot = await Bot.findOne({ id });

      if (!bot) return res.status(200).json({ message: "Esse bot não existe" });

      await Bot.deleteOne({ id });

      return res.sendStatus(200);
    } catch (error) {
      return res
        .status(400)
        .json({ message: "Houve um problema ao apagar o bot" });
    }
  }
}

export default new BotController();
