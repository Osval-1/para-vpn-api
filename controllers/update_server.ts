import { Response, Request } from "express";
import { Server } from "../models/server";

export const updateServer = async (
  req: Request,
  res: Response,
): Promise<any> => {
  try {
    const { id } = req.query;
    if (!id) {
      return res.status(404).json({ messages: "Invalid Request Id" });
    }
    const { newCountry, newCountryImage } = req.body;
    const response = await Server.findByIdAndUpdate(
      id,
      {
        country: newCountry,
        countryImage: newCountryImage,
      },
      { new: true },
    );
  } catch (error) {
    console.log(error);
  }
};
