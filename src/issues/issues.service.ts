import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Issue } from 'src/schemas/issues'
import { type issueDto } from './Dto/issue.dto'

@Injectable()
export class IssuesService {
  constructor(@InjectModel(Issue.name) private readonly issue: Model<Issue>) {}

  async create(item: issueDto) {
    const createIssue = await this.issue.create(item)
    return createIssue
  }

  async listIssues(): Promise<issueDto[]> {
    const list = await this.issue.find({})
    return list
  }

  async updateItem(issue: issueDto, id: string) {
    const update = await this.issue.findByIdAndUpdate(id, issue, {
      new: true
    })
    return update
  }

  async deleteItem(id: string): Promise<issueDto> {
    const data = await this.issue.findByIdAndDelete(id)
    return data
  }
}
