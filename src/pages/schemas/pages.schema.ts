import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type PagesDocument = Page & Document;

@Schema()
export class Page {
  @Prop()
  title: string;
  @Prop()
  content: string;
  @Prop()
  slug: string;
  @Prop()
  publishStatus: string;
  @Prop()
  publishDate: string;
  @Prop()
  publishDateTimeStamp: Date;
  @Prop()
  createDate: string;
  @Prop()
  createDateTimeStamp: Date;
  @Prop()
  updateDate: string;
  @Prop()
  updateDateTimeStamp: Date;
}

export const PagesSchema = SchemaFactory.createForClass(Page);
