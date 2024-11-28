import { Router } from "express";
import { UserModel } from "../models/userModal";
import bcrypt from "bcrypt";

import jwt from "jsonwebtoken";
import { z } from "zod";
import { JWT_PASSWORD } from "../config";

export const userRouter = Router();

userRouter.post("/signup", async (req, res) => {
  const requireBody = z.object({
    email: z.string().min(3).max(50).email(),
    password: z
      .string()
      .min(8)
      .max(16)
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      ),
    // username: z.string().min(3).max(10),
  });
  const parseDataWithSuccess = requireBody.safeParse(req.body);

  if (!parseDataWithSuccess.success) {
    res.json({
      message: "Incorrect format",
      error: parseDataWithSuccess.error,
    });
    return;
  }

  const { email, password, username } = req.body;
  const hashedPassword = await bcrypt.hash(password, 5);

  try {
    await UserModel.create({
      email: email,
      password: hashedPassword,
      // username: username
    });
  } catch (error) {
    console.log("Error while puttting it into DB", error);
    res.status(500).json({
        message: "Server error"
    })
  }

  res.status(200).json({
    message: "SignUp Succeeded",
  });
});

userRouter.post("/signin", async (req, res) => {
  const { email, password, username } = req.body;

  // finding user
  const user = await UserModel.findOne({
    email: email,
    // username: username
  });

  // check if user exist or not
  if (!user) {
    res.status(403).json({
      message: "User does not in our DB",
    });
    return;
  }

  // comparing the signin password with the hashed password in the DB
  const comparePassword = await bcrypt.compare(
    password,
    user.password as string
  );

  try {
    if (comparePassword) {
      const token = jwt.sign(
        {
          id: user._id.toString(),
        },
        JWT_PASSWORD as string
      );

      res.json({
        message: "Signin Successful",
        token: token,
      });
    } else {
        res.status(411).json({
            message: "Incorrect Password"
        })
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
        message: "Server error"
    })
  }
});
