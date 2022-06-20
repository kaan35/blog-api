import { Module } from '@nestjs/common';
import { PagesService } from './pages.service';
import { PagesController } from './pages.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Page, PagesSchema } from './schemas/pages.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Page.name, schema: PagesSchema }]),
  ],
  controllers: [PagesController],
  providers: [PagesService],
})
export class PagesModule {}
