import { Module } from '@nestjs/common'
import { AuthServiceGoogle } from './strategy/auth.service'
import { PassportModule } from '@nestjs/passport'
import { AuthController } from './auth.controllers'
import { JwtModule } from '@nestjs/jwt'
import { secrets } from 'src/utils/envs'
import { UserModule } from 'src/user/user.module'

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      global: true,
      secret: secrets.JWT_SECRET,
      signOptions: { expiresIn: '60s' }
    }),
    UserModule
  ],
  controllers: [AuthController],
  providers: [AuthServiceGoogle]
})
export class AuthModule {}
