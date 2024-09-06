import { validationResult } from 'express-validator';
import User from '../Model/user.model.js';
import jwt from 'jsonwebtoken';

// const JWT_SECRET = process.env.JWT_SECRET || 'JaiSiyaRam'; // Use environment variable or fallback

export const Login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ where: { email } });

        if (user) {
            const isPasswordValid = await User.checkPassword(password, user.password);

            if (isPasswordValid) {
 
        const payload = { password: email };
        const token = jwt.sign(payload, "Sipl@12345",);
 

                return res.status(200).json({ message: 'Login successful', token });
            } else {
                return res.status(401).json({ error: 'Invalid Password' });
            }
        }

        return res.status(401).json({ error: 'Invalid Email' });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const Register = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ error: 'Bad request', errors: errors.array() });
    }

    const { username, email, password } = req.body;

    try {
        let user = await User.create({ username, email, password });

        return res.status(200).json({ message: 'User registered successfully', user });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};
