import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { IssuesService } from './issues.service'
import { issueDto } from './Dto/issue.dto'

@Controller('issues')
export class IssuesController {
  constructor(readonly issueServise: IssuesService) {}

  @Get()
  async getAllIssues() {
    return await this.issueServise.listIssues()
  }

  @Post()
  async createIssue(@Body() issue: issueDto) {
    const data = await this.issueServise.create(issue)
    return data
  }

  @Put(':id')
  async updateIssue(@Body() issue: issueDto, @Param('id') id: string) {
    const data = await this.issueServise.updateItem(issue, id)
    return data
  }

  @Delete(':id')
  async deleteIssue(@Param('id') id: string) {
    return await this.issueServise.deleteItem(id)
  }
}
