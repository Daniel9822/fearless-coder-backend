import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import type { HydratedDocument } from 'mongoose'

export type InterviewDocument = HydratedDocument<Question>

@Schema()
export class Question {
  @Prop()
  question: string

  @Prop()
  answer: string
}

export const QuestionSchema = SchemaFactory.createForClass(Question)
