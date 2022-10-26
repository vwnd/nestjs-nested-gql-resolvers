import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Author } from 'src/authors/author.entity';
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

  @ResolveField(() => [Author])
  author(@Parent() post: Post) {
    return this.postsService.postAuthor(post.id);
  }
}
