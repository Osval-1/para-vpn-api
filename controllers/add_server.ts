import { Response, Request } from "express";
import { Server } from "../models/server";

export const addServer = async(req: Request, res: Response): Promise<any> => {
  try {
    const { country, countryImage } = req.body;
    if (!country || !countryImage) {
      return res.status(404).json({ message: "Server name or Image not found" });
      
    }
    const newServer = new Server({
      country: country,
      countryImage: countryImage,
    });
    await newServer.save()
    return res.status(200).json({message:"Server Created"})
  } catch (error) {
    console.log(error)
  }
};
