import express, { Application,Express } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors, { CorsOptions } from "cors";

dotenv.config();

const app: Application = express();

const corsOptions: CorsOptions = {
  origin: "*",
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log("server is running on port", process.env.PORT);
});
