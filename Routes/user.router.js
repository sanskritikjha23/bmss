import express from 'express';
import {Login, Register} from "../Controller/user.controller.js"
import {body} from 'express-validator';

const router= express.Router();

router.post("/Register", Register);

router.post("/Login",Login)

export default router;