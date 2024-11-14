import { Response, Request } from "express";
import { Server } from "../models/server";
import Fs from 'node:fs/promises'


export const updateServer = async (
  req: Request,
  res: Response,
): Promise<any> => {
  try {
    const { id } = req.query;
    if (!id) {
      return res.status(404).json({ messages: "Invalid Request Id" });
    }
    const { country } = req.body;
    if (!country) {
      return res
        .status(404)
        .json({ message: "Server name or Image not found" });
    }
    let imagePath;
    if(req.file){
    imagePath  = "images/" + req.file?.filename;
    }
    const oldServerImage = await Server.findOne({_id:id})
    const response = await Server.findByIdAndUpdate(
      id,
      {
        country: country,
        countryImage: imagePath,
      },
      { new: true },
    );
    if(oldServerImage?.countryImage!==response?.countryImage){
      await Fs.rm(`./public/${oldServerImage?.countryImage}`)
    }
    return res.status(200).json({ message: "Server updated successfully" });
  } catch (error) {
    console.log(error);
  }
};
