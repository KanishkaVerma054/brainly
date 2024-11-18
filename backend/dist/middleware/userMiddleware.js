"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userMiddleware = void 0;
const userMiddleware = (req, res, next) => {
    // const header = req.headers["authorization"];
    // const decoded = jwt.verify(header as string, JWT_PASSWORD)
    // if (decoded) {
    //     //@ts-ignore
    //     req.userId = decoded.id;
    //     next()
    // } else {
    //     res.status(403).json({
    //         message: "You are not logged in"
    //     })
    // }
};
exports.userMiddleware = userMiddleware;
// override the types of the express request object
