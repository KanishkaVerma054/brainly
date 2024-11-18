"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
// import { UserModel } from "../models/userModal";
// import bcrypt from 'bcrypt'
// import jwt from 'jsonwebtoken'
// import { z } from "zod";
// import { JWT_PASSWORD } from "../config";
exports.userRouter = (0, express_1.Router)();
exports.userRouter.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const requireBody = z.object({
    //     email: z.string().min(3).max(100).email(),
    //     password: z.string().min(8).max(20).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),
    //     // userName: z.string().min(3).max(20)
    // })
    // const parseDataWithSuccess = requireBody.safeParse(req.body);
    // if(!parseDataWithSuccess.success) {
    //     res.json({
    //         message: "Incorrect format",
    //         error: parseDataWithSuccess.error
    //     })
    //     return
    // }
    // const {email, password} = req.body
    // const hashedPassword = await bcrypt.hash(password, 5);
    // try {
    // await UserModel.create({
    //     email: email,
    //     password: hashedPassword,
    //     // userName: userName
    // })
    // res.json({
    //     message: "Signup succeeded"
    // })
    // } catch (error) {
    //     console.log("Error while putting it into DB", error);
    // }    
}));
exports.userRouter.post("/signin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
}));