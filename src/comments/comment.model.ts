import { Schema, Types } from 'mongoose';

export const CommentSchema = new Schema({
    id: { type: Types.ObjectId, required: true, auto: true },
    postId: { type: String, required: true },
    author: { type: String, required: true },
    content: { type: String, required: true },
});