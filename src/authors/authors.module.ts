import { Module } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { AuthorsResolver } from './authors.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from './author.entity';
import { PostsModule } from 'src/posts/posts.module';

@Module({
  imports: [TypeOrmModule.forFeature([Author]), PostsModule],
  providers: [AuthorsResolver, AuthorsService],
})
export class AuthorsModule {}
