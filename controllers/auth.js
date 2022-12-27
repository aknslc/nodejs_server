import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";
import User from '../models/User.js';


export const register = async (req, res, next) => {
    try {

        const checkEmail = await User.findOne({ email: req.body.email });
        const checkUsername = await User.findOne({ username: req.body.username });

        if (checkEmail) return res.status(404).json({ message: "This Email is already registered" })
        if (checkUsername) return res.status(404).json({ message: "This Username is already registered" })

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User(
            {
                username: req.body.username,
                email: req.body.email,
                password: hash
            }
        );


        await newUser.save();
        res.status(200).json(newUser);


    } catch (err) {
        next(err)
    }
}



export const login = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) return res.status(404).json({ message: "User not found!" });

        const isPasswordCorrect = await bcrypt.compare(
            req.body.password,
            user.password
        )
        if (!isPasswordCorrect) return res.status(400).json({ message: "Wrong Password or Email!" })
        const accessToken = jwt.sign(
            {
                id: user._id,
                isAdmin: user.isAdmin
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "1d" }
        )

        const { isAdmin, password, ...other } = user._doc

        res.cookie('access_token', accessToken, {
            httpOnly: true,

        });

        return res.status(200).json({ isAdmin, ...other });

    } catch (err) {
        next(err)
    }
}
