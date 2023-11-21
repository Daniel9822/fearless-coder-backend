import { MongooseModule } from '@nestjs/mongoose'
import { QuestionsService } from './questions.service'
import { Module } from '@nestjs/common'
import { Question, QuestionSchema } from 'src/schemas/question'
import { QuestionsController } from './questions.controllers'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Question.name, schema: QuestionSchema }])
  ],
  controllers: [QuestionsController],
  providers: [QuestionsService]
})
export class QuestionsModule {}
