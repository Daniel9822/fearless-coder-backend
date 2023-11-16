import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { InterviewsService } from './interviews.service'
import { InterviewDto } from './Dto/intervie.dto'

@Controller('interview')
export class InterviewsController {
  constructor(readonly intervieService: InterviewsService) {}

  @Get()
  async allInteviews() {
    const data = await this.intervieService.listAll()
    return data
  }

  @Post()
  async createInterview(@Body() interview: InterviewDto) {
    return await this.intervieService.create(interview)
  }

  @Put(':id')
  async updateInterview(
    @Param('id') id: string,
    @Body() interview: InterviewDto
  ) {
    const data = await this.intervieService.update(id, interview)
    return data
  }

  @Delete(':id')
  async deleteItem(@Param('id') id: string) {
    return await this.intervieService.deleteInterview(id)
  }
}
