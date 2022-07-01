import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FormContactController } from './form-contact.controller';
import { FormContactService } from './form-contact.service';
import {
  Form_Contact_Message,
  FormContactMessageSchema,
} from './schemas/form-contact-messages.schema';
import { ValidateService } from '../utils/validate/validate.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Form_Contact_Message.name, schema: FormContactMessageSchema },
    ]),
  ],
  controllers: [FormContactController],
  providers: [FormContactService, ValidateService],
})
export class FormContactModule {}
