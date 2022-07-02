import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { PagesService } from './pages.service';
import { Page, PagesSchema } from './schemas/pages.schema';

describe('PagesService', () => {
  let service: PagesService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot(),
        MongooseModule.forRoot(process.env.DATABASE_URL),
        MongooseModule.forFeature([{ name: Page.name, schema: PagesSchema }]),
      ],
      providers: [PagesService],
    }).compile();
    service = module.get<PagesService>(PagesService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
