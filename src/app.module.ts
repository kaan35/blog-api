import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticlesModule } from './articles/articles.module';
import { AuthorsModule } from './authors/authors.module';
import { PagesModule } from './pages/pages.module';
import { FormContactModule } from './form-contact/form-contact.module';
import { ValidateService } from './utils/validate/validate.service';
import { DateService } from './utils/date/date.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DATABASE_URL),
    ArticlesModule,
    AuthorsModule,
    PagesModule,
    FormContactModule,
  ],
  controllers: [AppController],
  providers: [AppService, ValidateService, DateService],
})
export class AppModule {}
