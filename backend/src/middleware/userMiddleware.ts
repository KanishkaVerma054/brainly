import { NextFunction, Request, Response } from "express";
import Jwt  from "jsonwebtoken";
import { JWT_PASSWORD } from "../config";

export const userMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
    const header = req.headers["token"];;
    const decoded = Jwt.verify(header as string, JWT_PASSWORD as string)
    
    if(decoded) {
        //@ts-ignore
        req.userId = decoded.id // TODO: how to override of the express request object
        next()
    } else {
        res.status(403).json({
            message: "You are not logged in"
        })
    }
};
