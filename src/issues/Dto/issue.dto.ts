import { IsNotEmpty } from 'class-validator'

export class issueDto {
  @IsNotEmpty()
  title: string

  @IsNotEmpty()
  description: string
}
