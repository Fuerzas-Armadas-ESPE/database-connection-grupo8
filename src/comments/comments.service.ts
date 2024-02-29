import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CommentsService {
  constructor(@InjectModel('Comment') private readonly commentModel: Model<any>) {}

  async getAllComments(postId: string): Promise<any[]> {
    return await this.commentModel.find({ postId }).exec();
  }

  async getComment(id: string): Promise<any | null> {
    try {
      const comment = await this.commentModel.findById(id).exec();
      if (!comment) {
        throw new NotFoundException('Comment not found');
      }
      return comment;
    } catch (error: any) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async createComment(commentData: any): Promise<any> {
    try {
      const createdComment = new this.commentModel(commentData);
      return await createdComment.save();
    } catch (error: any) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async updateComment(id: string, commentData: any): Promise<any | null> {
    const existingComment = await this.commentModel.findById(id).exec();
    if (!existingComment) {
      throw new NotFoundException('Comment not found');
    }
    try {
      await this.commentModel.findByIdAndUpdate(id, commentData).exec();
      return await this.commentModel.findById(id).exec();
    } catch (error: any) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async deleteComment(id: string): Promise<void> {
    const existingComment = await this.commentModel.findById(id).exec();
    if (!existingComment) {
      throw new NotFoundException('Comment not found');
    }
    try {
      await this.commentModel.findByIdAndDelete(id).exec();
    } catch (error: any) {
      throw new InternalServerErrorException(error.message);
    }
  }
}