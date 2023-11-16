import { MongooseModule } from '@nestjs/mongoose'
import { InterviewsController } from './interviews.controllers'
import { InterviewsService } from './interviews.service'
import { Module } from '@nestjs/common'
import { Interview, InterviewSchema } from 'src/schemas/interviews'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Interview.name, schema: InterviewSchema }])
  ],
  controllers: [InterviewsController],
  providers: [InterviewsService]
})
export class InterviewsModule {}
