import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Article, ArticleDocument } from './schemas/articles.schema';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectModel(Article.name) private articleModel: Model<ArticleDocument>,
  ) {}

  async create(createArticleDto: CreateArticleDto) {
    return await this.articleModel.create(createArticleDto);
  }

  findAll() {
    return this.articleModel.find().exec();
  }

  findOne(id: string) {
    return this.articleModel.findOne({ _id: id }).exec();
  }

  findOneBySlug(slug: string) {
    return this.articleModel.findOne({ slug: slug }).exec();
  }

  findLatest(limit?: number) {
    if (!(limit > 0)) limit = 5;
    return this.articleModel.find().sort({ _id: -1 }).limit(limit).exec();
  }

  archive() {
    return this.articleModel.find().sort({ _id: -1 }).exec();
  }

  async update(id: string, updateArticleDto: UpdateArticleDto) {
    return await this.articleModel
      .findByIdAndUpdate({ _id: id }, updateArticleDto)
      .exec();
  }

  async remove(id: string) {
    return await this.articleModel.findByIdAndRemove({ _id: id }).exec();
  }
}
