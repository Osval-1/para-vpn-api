import { Response, Request } from "express";
import { Server } from "../models/server";
import Fs from 'node:fs/promises'

export const deleteServer = async (req: Request, res: Response): Promise<any> => {
  try {
    const { id } = req.query;
    if (!id) {
      return res.status(404).json({ messages: "Invalid Request Id" });
    }
    const response = await Server.findByIdAndDelete(id);
    await Fs.rm(`./public/${response?.countryImage}`)
    return res.status(200).json({ message: "Server deleted successfully" });
  } catch (error) {
    console.log(error)
  }
};
