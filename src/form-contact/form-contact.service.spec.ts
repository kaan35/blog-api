import { Test, TestingModule } from '@nestjs/testing';
import { FormContactService } from './form-contact.service';

describe('FormContactService', () => {
  let service: FormContactService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FormContactService],
    }).compile();
    service = module.get<FormContactService>(FormContactService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
