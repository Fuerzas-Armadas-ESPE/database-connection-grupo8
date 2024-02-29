import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Post {
  @Prop({ required: true })
  title?: string;

  @Prop({ required: true })
  content?: string;
}

export type PostDocument = Post & Document;

export const PostSchema = SchemaFactory.createForClass(Post);
