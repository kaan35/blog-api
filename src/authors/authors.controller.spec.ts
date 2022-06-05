import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthorsController } from './authors.controller';
import { AuthorsService } from './authors.service';
import { Author, AuthorSchema } from './schemas/authors.schema';

describe('AuthorsController', () => {
  let controller: AuthorsController;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot(),
        MongooseModule.forRoot(process.env.DATABASE_URL),
        MongooseModule.forFeature([
          { name: Author.name, schema: AuthorSchema },
        ]),
      ],
      controllers: [AuthorsController],
      providers: [AuthorsService],
    }).compile();
    controller = module.get<AuthorsController>(AuthorsController);
  });
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
