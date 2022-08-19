import { Injectable } from '@nestjs/common';
import { CreatePageDto } from './dto/create-page.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdatePageDto } from './dto/update-page.dto';
import { Page, PagesDocument } from './schemas/pages.schema';

@Injectable()
export class PagesService {
  constructor(
    @InjectModel(Page.name) private pagesModel: Model<PagesDocument>,
  ) {}

  create(createPageDto: CreatePageDto) {
    return 'This action adds a new page';
  }

  findAll() {
    return this.pagesModel.find().exec();
  }

  findOneBySlug(slug: string) {
    return this.pagesModel.findOne({ slug: slug }).exec();
  }

  findOne(id: string) {
    return this.pagesModel.findOne({ _id: id }).exec();
  }

  update(id: number, updatePageDto: UpdatePageDto) {
    return `This action updates a #${id} page`;
  }

  remove(id: number) {
    return `This action removes a #${id} page`;
  }
}
