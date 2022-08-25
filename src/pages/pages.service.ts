import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Page, PagesDocument } from './schemas/pages.schema';
import { DateService } from '../utils/date/date.service';
import { CreatePageDto } from './dto/create-page.dto';
import { UpdatePageDto } from './dto/update-page.dto';

@Injectable()
export class PagesService {
  constructor(
    @InjectModel(Page.name) private pagesModel: Model<PagesDocument>,
    private date: DateService,
  ) {}

  async create(data: CreatePageDto) {
    let response;
    data.createDate = this.date.currentDate();
    data.createDateTime = this.date.currentDateTime();
    data.createDateTimeStamp = this.date.currentDateTimeStamp();
    await this.pagesModel
      .create(data)
      .then((content) => {
        response = {
          status: 'success',
          message: 'Page created successfully',
          data: content,
        };
      })
      .catch(() => {
        response = {
          status: 'error',
          message: 'An error occurred to create page',
        };
      });
    return response;
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
    data.updateDate = this.date.currentDate();
    data.updateDateTime = this.date.currentDateTime();
    data.updateDateTimeStamp = this.date.currentDateTimeStamp();
    await this.pagesModel
      .findByIdAndUpdate({ _id: id }, data)
      .exec()
      .then((content) => {
        response = {
          status: 'success',
          message: 'Page updated successfully',
          data: content,
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

  async remove(id: string) {
    let response;
    await this.pagesModel
      .findByIdAndRemove({ _id: id })
      .exec()
      .then(() => {
        response = {
          status: 'success',
          message: 'Page delete successfully',
        };
      })
      .catch(() => {
        response = {
          status: 'error',
          message: 'An error occurred to remove page',
        };
      });
    return response;
  }
}
