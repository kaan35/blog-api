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
  publishDateTimeStamp: string;
  @Prop()
  createDate: string;
  @Prop()
  createDateTime: string;
  @Prop()
  createDateTimeStamp: string;
  @Prop()
  updateDate: string;
  @Prop()
  updateDateTime: string;
  @Prop()
  updateDateTimeStamp: string;
}

export const PagesSchema = SchemaFactory.createForClass(Page);
