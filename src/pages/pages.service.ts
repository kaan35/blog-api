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

  async update(id: string, data: UpdatePageDto) {
    let response;
    await this.pagesModel
      .findByIdAndUpdate({ _id: id }, data)
      .exec()
      .then(() => {
        response = {
          status: 'success',
          message: 'Page updated successfully',
        };
      })
      .catch(() => {
        response = {
          status: 'error',
          message: 'An error occurred to update page',
        };
      });
    return response;
  }

  remove(id: number) {
    return `This action removes a #${id} page`;
  }
}
