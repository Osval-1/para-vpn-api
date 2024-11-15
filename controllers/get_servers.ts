import { Response, Request } from "express";
import { Server } from "../models/server";
import { networkStrength } from "../utils/generate_network_strength";
import crypto from "crypto";

export const getServers = async (req: Request, res: Response): Promise<any> => {
  try {
    const vpnServers = await Server.find({});
    const servers = vpnServers.map((server) => {
      return {
        _id: server._id,
        country: server.country,
        countryImage: server.countryImage,
        strength: networkStrength(),
        dataRate: [crypto.randomInt(1, 25), crypto.randomInt(1, 25)],
      };
    });
    return res.status(200).json({ servers });
  } catch (error) {
    console.log(error);
  }
};
