import { Response, Request } from "express";
import { Server } from "../models/server";

export const addServer = async(req: Request, res: Response) => {
  try {
    const { country, countryImage } = req.body;
    if (!country || !countryImage) {
      return res.status(400).json({ message: "Server name or Image not found" });
      
    }
    const newServer = new Server({
      country: country,
      countryImage: countryImage,
    });
    await newServer.save()
    return res.status(200).json({message:"Server Created"})
  } catch (error) {
    console.log(error);
  }
};
