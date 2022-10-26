import {
  Resolver,
  Mutation,
  Query,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { Post } from 'src/posts/post.entity';
import { PostsService } from 'src/posts/posts.service';
import { Author } from './author.entity';
import { AuthorsService } from './authors.service';

@Resolver(() => Author)
export class AuthorsResolver {
  constructor(
    private readonly authorsService: AuthorsService,
    private readonly postsService: PostsService,
  ) {}

  @Query(() => [Author])
  authors() {
    return this.authorsService.findAll();
  }

  @Mutation(() => Author)
  createAuthor(@Args('name') name: string) {
    return this.authorsService.create(name);
  }

  @ResolveField(() => [Post])
  posts(@Parent() author: Author) {
    const { id } = author;
    return this.postsService.findAllByAuthor(id);
  }
}
