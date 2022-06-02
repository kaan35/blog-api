import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'mongoose';
import { Author } from '../../authors/schemas/authors.schema';

export type ArticleDocument = Article & Document;

@Schema()
export class Article {
  @Prop()
  title: string;
  @Prop()
  author: Author;
  @Prop()
  content: string;
  @Prop()
  slug: string;
  @Prop()
  comments: [
    {
      _id: {
        type: ObjectId;
        ref: 'Authors';
      };
      firstname: string;
      lastname: string;
      data: string;
    },
  ];
  @Prop()
  publishStatus: string;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);
