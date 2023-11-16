import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import type { HydratedDocument } from 'mongoose'
import mongoose from 'mongoose'

export type InterviewDocument = HydratedDocument<Interview>

@Schema()
export class Interview {
  @Prop()
  title: string

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Issues' })
  issue: mongoose.Schema.Types.ObjectId

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  author: mongoose.Schema.Types.ObjectId
}

export const InterviewSchema = SchemaFactory.createForClass(Interview)
