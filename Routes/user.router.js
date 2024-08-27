import express from 'express';
import {Login, Register} from "../Controller/user.controller.js"
import {body} from 'express-validator';

const router= express.Router();

router.post("/Register",
body("username","Username is required").notEmpty(),
body("email","Email is required").isEmail(),
body("password","Password is required and length must be atleast 4").isLength({min:4}), Register);

router.post("/Login",Login)

export default router;