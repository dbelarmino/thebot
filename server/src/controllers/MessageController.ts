import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import Message from "../models/Message";

class MessageController {
  public async index(req: Request, res: Response): Promise<Response> {
    const { conversationId } = req.query;

    try {
      const messages = await Message.find({
        conversationId: String(conversationId),
      });

      const messagesSerialization = messages.map((message) => {
        return {
          id: message?.id,
          conversationId: message?.conversationId,
          timestamp: message?.createdAt,
          from: message?.from,
          to: message?.to,
          text: message?.text,
        };
      });

      return res.status(200).json(messagesSerialization);
    } catch (error) {
      return res
        .status(400)
        .json({ message: "Houve um problema ao buscar a mensagem" });
    }
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      const message = await Message.findOne({ id });

      const messageSerialization = {
        id: message?.id,
        conversationId: message?.conversationId,
        timestamp: message?.createdAt,
        from: message?.from,
        to: message?.to,
        text: message?.text,
      };

      return res.status(200).json(messageSerialization);
    } catch (error) {
      return res
        .status(400)
        .json({ message: "Houve um problema ao buscar a mensagem" });
    }
  }

  public async store(req: Request, res: Response): Promise<Response> {
    const { conversationId, from, to, text } = req.body;

    try {
      const userMessage = {
        conversationId: conversationId ? String(conversationId) : uuidv4(),
        from: from ? String(from) : uuidv4(),
        to: String(to),
        text: String(text),
        timestamp: "",
      };

      const userCreatedMessage = await Message.create({
        conversationId: userMessage.conversationId,
        from: userMessage.from,
        to: userMessage.to,
        text: userMessage.text,
      });

      userMessage.timestamp = userCreatedMessage.createdAt
        ? userCreatedMessage.createdAt
        : "";

      const botMessage = {
        conversationId: userMessage.conversationId,
        from: userMessage.to,
        to: userMessage.from,
        text: `Você disse: ${userMessage.text}`,
        timestamp: "",
      };

      const botCreatedMessage = await Message.create({
        conversationId: botMessage.conversationId,
        from: botMessage.from,
        to: botMessage.to,
        text: botMessage.text,
      });

      botMessage.timestamp = botCreatedMessage.createdAt
        ? botCreatedMessage.createdAt
        : "";

      return res.status(201).json({ userMessage, botMessage });
    } catch (error) {
      return res
        .status(400)
        .json({ message: "Houve um problema ao enviar a mensagem" });
    }
  }
}

export default new MessageController();
