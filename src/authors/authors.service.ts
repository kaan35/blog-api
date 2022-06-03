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

  create(createAuthorDto: CreateAuthorDto) {
    return 'This action adds a new author';
  }

  findAll() {
    return this.authorModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} author`;
  }

  update(id: number, updateAuthorDto: UpdateAuthorDto) {
    return `This action updates a #${id} author`;
  }

  remove(id: number) {
    return `This action removes a #${id} author`;
  }
}
