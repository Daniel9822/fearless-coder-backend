import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Interview, type InterviewDocument } from 'src/schemas/interviews'
import { type InterviewDto } from './Dto/intervie.dto'

@Injectable()
export class InterviewsService {
  constructor(
    @InjectModel(Interview.name) private readonly interview: Model<Interview>
  ) {}

  async create(data: InterviewDto) {
    const response = await this.interview.create(data)
    return response
  }

  async listAll(): Promise<InterviewDocument[]> {
    return await this.interview.find({}).populate('author').populate('issue')
  }

  async update(id: string, interview: InterviewDto) {
    const update = await this.interview.findByIdAndUpdate(id, interview, {
      new: true
    })
    return update
  }

  async deleteInterview(id: string) {
    const deleteItem = await this.interview.findByIdAndDelete(id)
    return deleteItem
  }
}
