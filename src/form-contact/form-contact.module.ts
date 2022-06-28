import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FormContactController } from './form-contact.controller';
import { FormContactService } from './form-contact.service';
import {
  Form_Contact_Message,
  FormContactMessageSchema,
} from './schemas/form-contact-messages.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Form_Contact_Message.name, schema: FormContactMessageSchema },
    ]),
  ],
  controllers: [FormContactController],
  providers: [FormContactService],
})
export class FormContactModule {}
