import { IsNotEmpty } from 'class-validator'

export class InterviewDto {
  @IsNotEmpty()
  title: string

  @IsNotEmpty()
  issue: string

  @IsNotEmpty()
  author: string
}
