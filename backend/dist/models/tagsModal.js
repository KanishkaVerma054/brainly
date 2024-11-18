"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsModal = void 0;
const mongoose_1 = require("mongoose");
const TagSchema = new mongoose_1.Schema({
    title: { type: String, unique: true, required: true }
});
exports.TagsModal = (0, mongoose_1.model)("Tags", TagSchema);
