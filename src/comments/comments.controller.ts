import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CommentsService } from './comments.service';

@Controller('posts/:postId/comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Get()
  async getAllComments(@Param('postId') postId: string): Promise<Comment[]> {
    return await this.commentsService.getAllComments(postId);
  }

  @Post()
  async createComment(
    @Param('postId') postId: string,
    @Body('author') author: string,
    @Body('content') content: string,
  ): Promise<Comment> {
    return await this.commentsService.createComment({postId, author, content});
  }
}