import { model, Schema } from "mongoose";

const TagSchema = new Schema({
    title: {type: String, unique: true, required: true}
})

export const TagsModal = model("Tags", TagSchema)