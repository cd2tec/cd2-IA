import express from "express";
import { chatCompletion } from "../controllers/chat.controller.js";

const router = express.Router();
//const tokenAuth = express
router.post("/", chatCompletion);

export default router;