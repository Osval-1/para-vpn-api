import express, { Router } from "express";
import { addServer } from "../controllers/add_server";
import { deleteServer } from "../controllers/delete_server";
import { updateServer } from "../controllers/update_server";
import { getServers } from "../controllers/get_servers";

const router:Router = express.Router();

router.post("/add", addServer);
router.get("/get", getServers);
router.patch("/update", updateServer);
router.delete("/delete", deleteServer);
