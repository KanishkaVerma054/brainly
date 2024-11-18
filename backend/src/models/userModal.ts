import { model, Schema } from "mongoose";

const UserSchema = new Schema ({
    email: {type: String, unique: true},
    password: String,
    // userName: {type: String, unique: true}
})

export const UserModel = model("User", UserSchema)