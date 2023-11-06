import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { AuthGuard } from '@nestjs/passport'
import { UserService } from 'src/user/user.service'

@Controller('auth')
export class AuthController {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService
  ) {}

  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth() {}

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Req() req, @Res() res) {
    const user = req.user
    const { googleId, email, profilePhoto, name } = user

    console.log(user)

    const searchIfExistUser = await this.userService.searchOneUser(email)

    const payload = {
      id: googleId,
      email
    }

    const token = await this.jwtService.signAsync(payload)

    if (!searchIfExistUser?.email) {
      await this.userService.saveUser({
        profile: profilePhoto,
        providerId: googleId,
        name,
        email
      })
    }

    res.redirect(
      `http://localhost:3000/login?userId=${googleId}&profile=${profilePhoto}&name=${name}&token=${token}&email=${email}`
    )
  }
}
