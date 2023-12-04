import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import type { HydratedDocument } from 'mongoose'

export type Document = HydratedDocument<Issue>

@Schema()
export class Issue {
  @Prop()
  title: string

  @Prop()
  description: string

  @Prop({ type: Object, default: {} })
  socials: object
}

export const IssuesSchema = SchemaFactory.createForClass(Issue)
