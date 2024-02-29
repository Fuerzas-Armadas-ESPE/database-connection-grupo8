import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Comment {
  @Prop({ required: true })
  id?: string;

  @Prop({ required: true })
  postId?: string;

  @Prop({ required: true })
  author?: string;

  @Prop({ required: true })
  content?: string;
}

export type CommentDocument = Comment & Document;

export const CommentSchema = SchemaFactory.createForClass(Comment);
