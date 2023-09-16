import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

let posts = [
  {
    id: 1,
    title: 'post 1',
  },
  {
    id: 2,
    title: 'post 2',
  },
  {
    id: 3,
    title: 'post3',
  },
];

@Injectable()
export class PostsService {
  create(createPostDto: CreatePostDto) {
    posts = [...posts, createPostDto];
    return posts;
  }

  findAll() {
    return posts;
  }

  findOne(id: number) {
    return posts.find((post) => post.id === id);
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return posts.map((post) => {
      if (post.id === id) {
        return updatePostDto;
      }
      return post;
    });
  }

  remove(id: number) {
    posts = posts.filter((post) => post.id !== id);
    return posts;
  }
}
