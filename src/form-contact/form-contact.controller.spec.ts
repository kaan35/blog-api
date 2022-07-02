import { Test, TestingModule } from '@nestjs/testing';
import { FormContactController } from './form-contact.controller';
import { FormContactService } from './form-contact.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Form_Contact_Message,
  FormContactMessageSchema,
} from './schemas/form-contact-messages.schema';
import { ValidateService } from '../utils/validate/validate.service';

describe('FormContactController', () => {
  let controller: FormContactController;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot(),
        MongooseModule.forRoot(process.env.DATABASE_URL),
        MongooseModule.forFeature([
          { name: Form_Contact_Message.name, schema: FormContactMessageSchema },
        ]),
      ],
      controllers: [FormContactController],
      providers: [FormContactService, ValidateService],
    }).compile();
    controller = module.get<FormContactController>(FormContactController);
  });
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
