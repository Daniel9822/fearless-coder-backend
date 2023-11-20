import { Body, Controller, Get, Post } from '@nestjs/common'
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
}
