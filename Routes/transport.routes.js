import express from "express";
import {body} from "express-validator"
import { createTransport, delTransport, getTransport, updateTransport } from "../Controller/transportation.controller.js";
const router = express.Router();;

router.get("/get-transport/:id", getTransport);
router.delete("/del-transport/:id",delTransport);
router.put("/update-transport/:id",updateTransport);
router.post("/create-transport",createTransport);

export default router;