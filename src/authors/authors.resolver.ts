import { Resolver } from '@nestjs/graphql';
import { AuthorsService } from './authors.service';

@Resolver()
export class AuthorsResolver {
  constructor(private readonly authorsService: AuthorsService) {}
}
