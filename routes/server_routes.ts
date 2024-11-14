import express, { Router } from "express";
import { addServer } from "../controllers/add_server";
import { deleteServer } from "../controllers/delete_server";
import { updateServer } from "../controllers/update_server";
import { getServers } from "../controllers/get_servers";
import multer from "multer";


const storage = multer.diskStorage({
    destination: './public/images',
    filename: (req, file, cb) =>{
        cb(null, Date.now() + file.originalname);
    }
});

const upload = multer({
    storage: storage, limits: { fieldSize: 10 * 1024 * 1024 }
});

const router: Router = express.Router();

router.post("/add",upload.single("image"), addServer);
router.get("/get", getServers);
router.patch("/update",upload.single("image"), updateServer);
router.delete("/delete", deleteServer);

export default router;
