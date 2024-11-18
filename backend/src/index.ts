import express from "express";
import { userMiddleware } from "./middleware/userMiddleware";
import { contentRouter } from "./routes/contentRouter";
import { shareRouter } from "./routes/shareRouter";
import { userRouter } from "./routes/userRouter";
import mongoose from "mongoose";
import { MONGO_URI, PORT } from "./config";

const app = express();

app.use(express.json());

app.use("/api/v1", userRouter);
app.use("/api/v1/", userMiddleware, contentRouter);
app.use("/api/v1/brain", shareRouter);

mongoose
  .connect(MONGO_URI as string)
  .then(() => {
    console.log("Connected");
    app.listen(PORT, () => {
      console.log(`Listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
