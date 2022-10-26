import { Post } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { PostsService } from './posts.service';

@Resolver(() => Post)
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Query(() => String)
  post() {
    return 'post';
  }
}
