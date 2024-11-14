import express, { Application } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors, { CorsOptions } from "cors";
import server from "./routes/server_routes";


dotenv.config();

const app: Application = express();

const corsOptions: CorsOptions = {
  origin: "*",
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.static("public"))

app.use("/server", server);

mongoose.connect(process.env.MONGOURL as string);
mongoose.connection.on("connected", () => {
  console.log("connected to mongoDB");
});
mongoose.connection.on("error", (err) => {
  console.log("error connecting to mongoDB", err);
});

app.listen(process.env.PORT, () => {
  console.log("server is running on port", process.env.PORT);
});
