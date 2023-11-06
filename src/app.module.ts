import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { MongooseModule } from '@nestjs/mongoose'
import { secrets } from './utils/envs'
import { UserModule } from './user/user.module'

@Module({
  imports: [AuthModule, MongooseModule.forRoot(secrets.MONGO_URI), UserModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
