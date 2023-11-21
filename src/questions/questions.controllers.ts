import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common'
import { QuestionsService } from './questions.service'
import { QuestionDto } from './Dto/question.dto'

@Controller('question')
export class QuestionsController {
  constructor(private readonly questionService: QuestionsService) {}

  @Get()
  async getAllQuestions() {
    return await this.questionService.findQuestions()
  }

  @Post()
  async createNewQuestion(@Body() question: QuestionDto) {
    return await this.questionService.createQuestion(question)
  }

  @Put(':id')
  async updateQuestion(@Body() question: QuestionDto, @Param('id') id: string) {
    return await this.questionService.updateQuestion(id, question)
  }

  @Get(':id')
  async findQuestionById(@Param('id') id: string) {
    return await this.questionService.findOneQuestion(id)
  }
}
