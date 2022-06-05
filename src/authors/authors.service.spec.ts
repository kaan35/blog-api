import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthorsService } from './authors.service';
import { Author, AuthorSchema } from './schemas/authors.schema';

describe('AuthorsService', () => {
  let service: AuthorsService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot(),
        MongooseModule.forRoot(process.env.DATABASE_URL),
        MongooseModule.forFeature([
          { name: Author.name, schema: AuthorSchema },
        ]),
      ],
      providers: [AuthorsService],
    }).compile();
    service = module.get<AuthorsService>(AuthorsService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
