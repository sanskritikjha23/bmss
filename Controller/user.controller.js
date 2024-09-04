import { validationResult } from 'express-validator';
import User from "../Model/user.model.js";

export const Login = async (request, response, next) => {
    let { email, password } = request.body;
    try {
        let user = await User.findOne({ where: { email } });
        if (user) {
            return User.checkPassword(password, user.password)
                ? response.status(200).json({ message: 'Login successful', user })
                : response.status(401).json({ error: 'Invalid Password' });
        }
        return response.status(401).json({ error: 'Invalid Email' });
    } catch (err) {
        console.error(err);
        return response.status(500).json({ error: 'Internal Server Error' });
    }
};

export const Register = async (request, response, next) => {
    console.log(request.body)
    try {
        const errors = validationResult(request);
        if (!errors.isEmpty())
            return response.status(401).json({ error: 'Bad request',errors });

        let { username, email, password } = request.body;
        let user = await User.create({ username, email, password });

        return response.status(200).json({ message: 'User saved', user });
    } catch (err) {
        console.log(err);
        return response.status(500).json({ error: 'Internal Server Error' });
    }
};
