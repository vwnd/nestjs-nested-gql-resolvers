import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Author } from './author.entity';

@Injectable()
export class AuthorsService {
  constructor(
    @InjectRepository(Author)
    private readonly authorsRepository: Repository<Author>,
  ) {}

  create(name: string) {
    const author = this.authorsRepository.create({ name, posts: [] });
    return this.authorsRepository.save(author);
  }

  findAll() {
    return this.authorsRepository.find();
  }
}
