import { Router } from "express";
import { UserModel } from "../models/userModal";
import bcrypt from 'bcrypt'

import jwt from 'jsonwebtoken'
import { z } from "zod";
import { JWT_PASSWORD } from "../config";

export const userRouter = Router();

userRouter.post("/signup", async (req, res) => {
    const requireBody = z.object({
        email: z.string().min(3).max(100).email(),
        password: z.string().min(8).max(20).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),
        // userName: z.string().min(3).max(20)
    })

    const parseDataWithSuccess = requireBody.safeParse(req.body);

    if(!parseDataWithSuccess.success) {
        res.json({
            message: "Incorrect format",
            error: parseDataWithSuccess.error
        })
        return
    }

    const {email, password} = req.body

    const hashedPassword = await bcrypt.hash(password, 5);

    try {
    await UserModel.create({
        email: email,
        password: hashedPassword,
        // userName: userName
    })

    res.json({
        message: "Signup succeeded"
    })

    } catch (error) {
        console.log("Error while putting it into DB", error);
    }    
})

userRouter.post("/signin", async (req, res) => {
    const { email, password } =  req.body;

    const user = await UserModel.findOne({
        email: email
    })

    if (!user) {
        res.status(403).json({
            message: "User does not in our DB"
        })
        return
    }

    //@ts-ignore
    const matchedPassword =  await bcrypt.compare(password, userPassword)

    if (matchedPassword) {
        const token = jwt.sign({
            id: user._id.toString()
        }, JWT_PASSWORD)

        res.json({
            message: "SignIn Successfull",
            token: token
        })
    } else res.status(403).json({
        message: "Incorrect Password"
    })
})