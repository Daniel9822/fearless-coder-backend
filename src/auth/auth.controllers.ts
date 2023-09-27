import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { AuthGuard } from '@nestjs/passport'

@Controller('auth')
export class AuthController {
  constructor(private readonly jwtService: JwtService) {}

  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth() {}

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Req() req, @Res() res) {
    const user = req.user
    const { googleId, email, profilePhoto, name } = user

    const payload = {
      id: googleId,
      email
    }

    const token = await this.jwtService.signAsync(payload)

    res.redirect(`http://localhost:3000/login?userId=${googleId}&profile=${profilePhoto}&name=${name}&token=${token}`)
  }
}
