import { Router } from "express";
import { LinkModal } from "../models/linkModal";
import { userMiddleware } from "../middleware/userMiddleware";
import { random } from "../utils/utils";
import { ContentModal } from "../models/contentModal";
import { UserModel } from "../models/userModal";

export const shareRouter = Router();

shareRouter.post("/share", userMiddleware, async (req, res) => {

    // TODO: Race condition
    const share = req.body.share;
    if (share) {
        const existingLink = await LinkModal.findOne({
            userId: req.userId
        });

        if (existingLink) {
            res.json({
                hash: existingLink.hash
            })
            return;
        }
        const hash = random(10);
        await LinkModal.create({
            userId: req.userId,
            hash: hash
        })

        res.json({
            hash
        })
    } else {
        await LinkModal.deleteOne({
            userId: req.userId
        });

        res.json({
            message: "Removed link"
        })
    }
})

shareRouter.get("/:shareLink", async (req, res) => {
    
    const hash = req.params.shareLink;

    const link = await LinkModal.findOne({
        hash
    });

    if (!link) {
        res.status(411).json({
            message: "Sorry incorrect input"
        })
        return;
    }
    // userId
    const content = await ContentModal.find({
        userId: link.userId
    })

    const user = await UserModel.findOne({
        _id: link.userId
    })

    // early returning if user is null

    if (!user) {
        res.status(411).json({
            message: "user not found, error should ideally not happen"
        })
        return;
    }

    // res.json({
    //     email: user?.email, //? means optional chaining //if user is null  // username: user?.username
    //     content: content
    // })

    res.json({
        username: user.email,
        content: content

    })
})

