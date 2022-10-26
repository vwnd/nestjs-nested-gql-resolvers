import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Post } from './post.entity';
import { PostsService } from './posts.service';

@Resolver(() => Post)
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Query(() => String)
  post() {
    return 'post';
  }

  @Mutation(() => Post)
  createPost(@Args('title') title: string, @Args('authorId') authorId: string) {
    return this.postsService.createPost(title, authorId);
  }
}
