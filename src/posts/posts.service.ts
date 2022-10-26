import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly postsRepository: Repository<Post>,
  ) {}

  createPost(title: string, authorId: string) {
    const post = this.postsRepository.create({
      title,
      author: {
        id: authorId,
      },
    });

    return this.postsRepository.save(post);
  }
}
