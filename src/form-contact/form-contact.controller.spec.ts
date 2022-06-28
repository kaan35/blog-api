import { Test, TestingModule } from '@nestjs/testing';
import { FormContactController } from './form-contact.controller';
import { FormContactService } from './form-contact.service';

describe('FormContactController', () => {
  let controller: FormContactController;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FormContactController],
      providers: [FormContactService],
    }).compile();
    controller = module.get<FormContactController>(FormContactController);
  });
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
