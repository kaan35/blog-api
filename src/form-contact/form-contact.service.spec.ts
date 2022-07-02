import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { FormContactService } from './form-contact.service';
import {
  Form_Contact_Message,
  FormContactMessageSchema,
} from './schemas/form-contact-messages.schema';
import { ValidateService } from '../utils/validate/validate.service';

describe('FormContactService', () => {
  let service: FormContactService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot(),
        MongooseModule.forRoot(process.env.DATABASE_URL),
        MongooseModule.forFeature([
          { name: Form_Contact_Message.name, schema: FormContactMessageSchema },
        ]),
      ],
      providers: [FormContactService, ValidateService],
    }).compile();
    service = module.get<FormContactService>(FormContactService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
