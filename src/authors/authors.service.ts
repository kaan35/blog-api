import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Author, AuthorDocument } from './schemas/authors.schema';

@Injectable()
export class AuthorsService {
  constructor(
    @InjectModel(Author.name) private authorModel: Model<AuthorDocument>,
  ) {}

  async create(createAuthorDto: CreateAuthorDto) {
    return await this.authorModel.create(createAuthorDto);
  }

  findAll() {
    return this.authorModel.find().exec();
  }

  findOne(id: string) {
    return this.authorModel.findOne({ _id: id }).exec();
  }

  update(id: number, updateAuthorDto: UpdateAuthorDto) {
    return `This action updates a #${id} author`;
  }

  async remove(id: string) {
    return await this.authorModel.findByIdAndRemove({ _id: id }).exec();
  }
}
