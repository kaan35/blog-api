import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FormContactService } from './form-contact.service';
import { CreateFormContactDto } from './dto/create-form-contact.dto';
import { UpdateFormContactDto } from './dto/update-form-contact.dto';

@Controller('formContact')
export class FormContactController {
  constructor(private readonly formContactService: FormContactService) {}

  @Post()
  create(@Body() createFormContactDto: CreateFormContactDto) {
    return this.formContactService.create(createFormContactDto);
  }

  @Get()
  findAll() {
    return this.formContactService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.formContactService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFormContactDto: UpdateFormContactDto,
  ) {
    return this.formContactService.update(+id, updateFormContactDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.formContactService.remove(+id);
  }
}
