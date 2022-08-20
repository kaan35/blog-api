import { Module } from '@nestjs/common';
import { PagesService } from './pages.service';
import { PagesController } from './pages.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Page, PagesSchema } from './schemas/pages.schema';
import { DateService } from '../utils/date/date.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Page.name, schema: PagesSchema }]),
  ],
  controllers: [PagesController],
  providers: [PagesService, DateService],
})
export class PagesModule {}
