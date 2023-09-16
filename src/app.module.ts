import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';
import { DogController } from './dog/dog.controller';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [PostsModule, CatModule],
  controllers: [AppController, DogController],
  providers: [AppService],
})
export class AppModule {}
