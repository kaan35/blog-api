import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { PagesController } from './pages.controller';
import { PagesService } from './pages.service';
import { Page, PagesSchema } from './schemas/pages.schema';

describe('PagesController', () => {
  let controller: PagesController;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot(),
        MongooseModule.forRoot(process.env.DATABASE_URL),
        MongooseModule.forFeature([{ name: Page.name, schema: PagesSchema }]),
      ],
      controllers: [PagesController],
      providers: [PagesService],
    }).compile();
    controller = module.get<PagesController>(PagesController);
  });
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
