import { Controller, Get, Post, Param, Body } from '@nestjs/common'
import { UserService } from './user.service'
import { CreateUserDto } from './dto/user.dto'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAllUSers() {
    return await this.userService.searchAllUsers()
  }

  @Get(':email')
  async getUserById(@Param('email') email: string) {
    return await this.userService.searchUserByEmail(email)
  }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return await this.userService.saveUser(createUserDto)
  }
}
