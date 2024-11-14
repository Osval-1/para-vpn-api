import { Response, Request } from "express";
import { Server } from "../models/server";

export const getServers = async (req: Request, res: Response): Promise<any> => {
  try {
    const servers = await Server.find({});
    return res.status(200).json({ servers });
  } catch (error) {
    console.log(error);
  }
};
