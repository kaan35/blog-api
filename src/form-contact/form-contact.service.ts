import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateFormContactDto } from './dto/create-form-contact.dto';
import { UpdateFormContactDto } from './dto/update-form-contact.dto';
import {
  Form_Contact_Message,
  FormContactMessageDocument,
} from './schemas/form-contact-messages.schema';

@Injectable()
export class FormContactService {
  constructor(
    @InjectModel(Form_Contact_Message.name)
    private formContactModel: Model<FormContactMessageDocument>,
  ) {}

  async create(data: CreateFormContactDto) {
    data.firstName = data.firstName.trim();
    data.lastName = data.lastName.trim();
    data.email = data.email.trim();
    data.message = data.message.trim();
    if (!data.firstName || !data.lastName || !data.email || !data.message) {
      return {
        message: 'Please fill the all required fields',
        status: 'error',
      };
    }
    const record = await this.formContactModel.create(data);
    return record._id
      ? { message: 'Message successfully send', status: 'success' }
      : { message: 'An error occurred', status: 'error' };
  }

  findAll() {
    return `This action returns all formContact`;
  }

  findOne(id: number) {
    return `This action returns a #${id} formContact`;
  }

  update(id: number, updateFormContactDto: UpdateFormContactDto) {
    return `This action updates a #${id} formContact`;
  }

  remove(id: number) {
    return `This action removes a #${id} formContact`;
  }
}
