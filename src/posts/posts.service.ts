import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
  ) {}

  create(createPostDto: CreatePostDto) {
    return this.postsRepository.save(createPostDto);
  }

  async findAll(query: { title: string }) {
    return this.postsRepository.find({
      where: {
        ...query,
        ...(query.title ? { title: Like(`%${query.title}%`) } : null),
      },
    });
  }

  findOne(id: number) {
    return this.postsRepository.find({ where: { id } });
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return this.postsRepository.update({ id }, updatePostDto);
  }

  remove(id: number) {
    return this.postsRepository.delete({ id });
  }
}
