import { Response, Request } from "express";
import { Server } from "../models/server";

export const getServers = async (req: Request, res: Response): Promise<any> => {
  try {
    const { id } = req.query;
    if (!id) {
      return res.status(404).json({ messages: "Invalid Request Id" });
    }
    const servers = await Server.find({});

    return res.status(200).json({ servers: servers });
  } catch (error) {
    console.log(error);
  }
};
