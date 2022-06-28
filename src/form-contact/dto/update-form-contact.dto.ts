import { PartialType } from '@nestjs/mapped-types';
import { CreateFormContactDto } from './create-form-contact.dto';

export class UpdateFormContactDto extends PartialType(CreateFormContactDto) {}
