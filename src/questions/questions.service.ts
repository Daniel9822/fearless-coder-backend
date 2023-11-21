import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Question } from 'src/schemas/question'
import { type QuestionDto } from './Dto/question.dto'

@Injectable()
export class QuestionsService {
  constructor(
    @InjectModel(Question.name) private readonly questionModel: Model<Question>
  ) {}

  async createQuestion(question: QuestionDto) {
    const create = await this.questionModel.create(question)
    return create
  }

  async findQuestions(): Promise<QuestionDto[]> {
    return await this.questionModel.find({})
  }

  async updateQuestion(id: string, question: QuestionDto) {
    const update = await this.questionModel.findByIdAndUpdate(id, question, {
      new: true
    })
    return update
  }

  async findOneQuestion(id: string): Promise<QuestionDto> {
    const question = await this.questionModel.findById(id)
    return question
  }
}
