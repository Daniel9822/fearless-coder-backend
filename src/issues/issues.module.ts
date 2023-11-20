import { MongooseModule } from '@nestjs/mongoose'
import { IssuesController } from './issues.controllers'
import { IssuesService } from './issues.service'
import { Module } from '@nestjs/common'
import { Issue, IssuesSchema } from 'src/schemas/issues'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Issue.name, schema: IssuesSchema }])
  ],
  controllers: [IssuesController],
  providers: [IssuesService]
})
export class IssuesModule {}
