import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { Strategy, VerifyCallback } from 'passport-google-oauth20'
import { secrets } from 'src/utils/envs'

@Injectable()
export class AuthServiceGoogle extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      clientID: secrets.GOOGLE_CLIENT_ID,
      clientSecret: secrets.GOOGLE_SECRET_ID,
      callbackURL: secrets.CALLBACK_URL,
      scope: ['profile', 'email']
    })
  }

  async validate(accessToken: string, refreshToken: string, profile: any, done: VerifyCallback) {
    const user = {
      googleId: profile.id,
      email: profile.emails[0].value,
      name: profile.displayName,
      profilePhoto: profile.photos[0].value
    }
    done(null, user)
  }
}
