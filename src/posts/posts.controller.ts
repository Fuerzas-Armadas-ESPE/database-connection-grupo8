import { Controller, Get, Post,Put, Body,Delete,  Param, NotFoundException, ParseIntPipe} from '@nestjs/common';
import { PostsService } from './posts.service';
import { RequestLogDocument } from '../modules/request-log/request-log.schema'; // Importa el 
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) { }

  @Get()
  async getAllPosts(): Promise<RequestLogDocument[]> {
    // Usa el tipo de documento del esquema de registro de solicitudes
    return this.postsService.getAllPosts();
  }

  @Post()
  async createPost(@Body() postData: any): Promise<any> {
    // Aquí puedes manejar la lógica para crear un nuevo post utilizando el servicio
    // Por ejemplo:
    return this.postsService.createPost(postData);
  }

  //eliminas con el id generado del monguillo uwu
  @Delete(':id')
  async deletePost(@Param('id') id: string): Promise<void> {
    return this.postsService.deletePost(id);
  }

  @Put(':id')
  async updatePost(@Param('id') id: string, @Body() postData: any): Promise<any> { // Cambia el tipo de 'id' a string
    try {
      const updatedPost = await this.postsService.updatePost(id, postData); // No necesitas convertir a string
      if (!updatedPost) {
        throw new NotFoundException('Post not found');
      }
      return updatedPost;
    } catch (error: any) {
      throw new NotFoundException(error.message);
    }
  }
}