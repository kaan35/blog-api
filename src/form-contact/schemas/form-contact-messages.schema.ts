import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type FormContactMessageDocument = Form_Contact_Message & Document;

@Schema()
export class Form_Contact_Message {
  @Prop()
  firstName: string;
  @Prop()
  lastName: string;
  @Prop()
  email: string;
  @Prop()
  message: string;
  @Prop()
  createDate: string;
  @Prop()
  createDateTimeStamp: Date;
  @Prop()
  updateDate: string;
  @Prop()
  updateDateTimeStamp: Date;
}

export const FormContactMessageSchema =
  SchemaFactory.createForClass(Form_Contact_Message);
