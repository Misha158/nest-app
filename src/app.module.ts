import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';
import { DogController } from './dog/dog.controller';
import { PostsModule } from './posts/posts.module';
import { Post } from './posts/entities/post.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'misha',
      database: 'posts',
      entities: [Post],
      synchronize: true,
      autoLoadEntities: true,
    }),
    PostsModule,
    CatModule,
  ],
  controllers: [AppController, DogController],
  providers: [AppService],
})
export class AppModule {}
