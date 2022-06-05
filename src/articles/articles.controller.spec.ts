import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './articles.service';
import { Article, ArticleSchema } from './schemas/articles.schema';

describe('ArticlesController', () => {
  let controller: ArticlesController;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot(),
        MongooseModule.forRoot(process.env.DATABASE_URL),
        MongooseModule.forFeature([
          { name: Article.name, schema: ArticleSchema },
        ]),
      ],
      controllers: [ArticlesController],
      providers: [ArticlesService],
    }).compile();
    controller = module.get<ArticlesController>(ArticlesController);
  });
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
