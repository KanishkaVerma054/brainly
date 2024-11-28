import { NextFunction, Request, Response } from "express";
import Jwt, { JwtPayload }  from "jsonwebtoken";
import { JWT_PASSWORD } from "../config";

export const userMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
    const header = req.headers["token"];
    const decoded = Jwt.verify(header as string, JWT_PASSWORD as string)
    
    if(decoded) {
        if(typeof decoded === "string") {
            res.status(403).json({
                message: "You are not logged in"
            })
            return
        }
        req.userId = (decoded as JwtPayload).id // TODO: how to override of the express request object: by creating override.d.ts
        next()
    } else {
        res.status(403).json({
            message: "You are not logged in"
        })
    }
};
