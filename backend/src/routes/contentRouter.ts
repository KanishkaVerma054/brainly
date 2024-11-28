import { Router } from "express";
import { ContentModal } from "../models/contentModal";
// import { userMiddleware } from "../middleware/userMiddleware";

export const contentRouter = Router();

// @ts-ignore
contentRouter.post("/content", async (req , res) => {
    const link = req.body.link
    const type = req.body.type
    const title = req.body.title

    await ContentModal.create({
        title,
        link,
        type,
        userId: req.userId,
        tags: []
    })
    return res.json({
        message: "Content added"
    })
})

contentRouter.get("/content", async (req, res) => {

    const userId = req.userId;
    
    const content = await ContentModal.find({
        userId: userId,
    }).populate("userId", "email") // this will get the email of the person how creatd the content
    res.status(200).json({
        content
    })
})

contentRouter.delete("/content", async (req, res) => {
    const contentId = req.body.contentId;

    await ContentModal.deleteMany({
        contentId,
        userId: req.userId
    })

    res.json({
        message: "Deleted"
    })
})