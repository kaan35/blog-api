import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { ObjectId } from 'mongoose';

export type AuthorDocument = Author & Document;

@Schema()
export class Author {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Authors' })
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
