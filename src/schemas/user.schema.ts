import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import type { HydratedDocument } from 'mongoose'

export type CatDocument = HydratedDocument<User>

@Schema()
export class User {
  @Prop()
  name: string

  @Prop()
  providerId: string

  @Prop()
  profile: string

  @Prop()
  email: string
}

export const UserSchema = SchemaFactory.createForClass(User)
