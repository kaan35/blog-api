import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticlesService } from './articles.service';
import { Article, ArticleSchema } from './schemas/articles.schema';

describe('ArticlesService', () => {
  let service: ArticlesService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot(),
        MongooseModule.forRoot(process.env.DATABASE_URL),
        MongooseModule.forFeature([
          { name: Article.name, schema: ArticleSchema },
        ]),
      ],
      providers: [ArticlesService],
    }).compile();
    service = module.get<ArticlesService>(ArticlesService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
