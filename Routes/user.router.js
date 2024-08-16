import express from 'express';
import {body} from 'express-validator';

const router= express.Router();

router.post("\Register",
body("username","Username is required").notEmpty(),
body("email","Email is required").isEmail(),
body("Password","Password is required and length must be atleast 4").isLength({min:4}), Register);

export default router;