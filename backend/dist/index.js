"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userMiddleware_1 = require("./middleware/userMiddleware");
const contentRouter_1 = require("./routes/contentRouter");
const shareRouter_1 = require("./routes/shareRouter");
const userRouter_1 = require("./routes/userRouter");
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("./config");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api/v1", userRouter_1.userRouter);
app.use("/api/v1/", userMiddleware_1.userMiddleware, contentRouter_1.contentRouter);
app.use("/api/v1/brain", shareRouter_1.shareRouter);
mongoose_1.default
    .connect(config_1.MONGO_URI)
    .then(() => {
    console.log("Connected");
    app.listen(config_1.PORT, () => {
        console.log(`Listening to port: ${config_1.PORT}`);
    });
})
    .catch((error) => {
    console.log(error);
});
