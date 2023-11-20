import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import type { HydratedDocument } from 'mongoose'

export type Document = HydratedDocument<Issues>

@Schema()
export class Issues {
  @Prop()
  title: string

  @Prop()
  description: string
}

export const IssuesSchema = SchemaFactory.createForClass(Issues)
