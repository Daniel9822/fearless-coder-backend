import { IssuesModule } from './issues/issues.module'
import { InterviewsModule } from './interviews/interviews.module'
import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { MongooseModule } from '@nestjs/mongoose'
import { secrets } from './utils/envs'
import { UserModule } from './user/user.module'

@Module({
  imports: [
    AuthModule,
    MongooseModule.forRoot(secrets.MONGO_URI),
    UserModule,
    InterviewsModule,
    IssuesModule
  ],
  controllers: [AppController],
  providers: [IssuesModule, InterviewsModule, AppService]
})
export class AppModule {}
