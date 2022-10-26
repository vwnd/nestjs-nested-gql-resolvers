import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { AuthorsModule } from './authors/authors.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';

@Module({
  imports: [
    PostsModule,
    AuthorsModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './data.db',
      entities: ['dist/**/*.entity.{ts,js}'],
      synchronize: true,
    } as SqliteConnectionOptions),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
