import { Resolver, Mutation, Query, Args } from '@nestjs/graphql';
import { Author } from './author.entity';
import { AuthorsService } from './authors.service';

@Resolver(() => Author)
export class AuthorsResolver {
  constructor(private readonly authorsService: AuthorsService) {}

  @Query(() => String)
  author() {
    return 'author';
  }

  @Mutation(() => Author)
  createAuthor(@Args('name') name: string) {
    return this.authorsService.create(name);
  }
}
