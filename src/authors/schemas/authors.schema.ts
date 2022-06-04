import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'mongoose';

export type AuthorDocument = Author & Document;

@Schema()
export class Author {
  _id: ObjectId;
  @Prop()
  firstname: string;
  @Prop()
  lastname: string;
  @Prop()
  email: string;
  @Prop()
  activationStatus: string;
}

export const AuthorSchema = SchemaFactory.createForClass(Author);
