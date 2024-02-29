import{Module, NestModule, MiddlewareConsumer} from '@nestjs/common';
import { JwtMiddleware } from './auth/jwt.middleware';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//import { Module} from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module'; // Importa el módulo de posts
import { CommentsModule } from './comments/comments.module'; // Importa el módulo de comentarios

import { MongooseModule } from '@nestjs/mongoose';
import { RequestLogSchema } from './modules/request-log/request-log.schema';
import { RequestLogService } from './modules/request-log/request-log.service';
 

@Module({
  imports: [AuthModule, PostsModule, CommentsModule,
  
    MongooseModule.forRoot('mongodb://localhost:27017'), 
    MongooseModule.forFeature([
      { name: 'RequestLog', schema: RequestLogSchema },
    ]),], // Añade CommentsModule a la lista de imports

  controllers: [AppController],
  providers: [AppService,RequestLogService],
})
export class AppModule implements NestModule{

  configure(consumer: MiddlewareConsumer){
    consumer.apply(JwtMiddleware).forRoutes('posts');
    consumer.apply(JwtMiddleware).forRoutes('comments');
  }
}






// app.module.ts

// import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
// import { PostsModule } from './posts/posts.module';

// @Module({
//   imports: [
//     MongooseModule.forRoot('mongodb://localhost:27017'),
//     PostsModule,
//   ],
// })
// export class AppModule {}