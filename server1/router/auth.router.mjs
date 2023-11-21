import express from "express";
import { handleLogin, handleTokenVerify } from "../controller/auth.controller.mjs";

const router = express.Router();

router.post('/login', handleLogin);
router.get('/verify', handleTokenVerify);

export default router;