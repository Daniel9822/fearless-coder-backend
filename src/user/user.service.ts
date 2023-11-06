import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { User } from 'src/schemas/user.schema'
import type { CreateUserDto } from './dto/user.dto'

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>
  ) {}

  async saveUser(user: CreateUserDto) {
    const create = await this.userModel.create(user)
    return create
  }

  async searchUserByEmail(email: string): Promise<CreateUserDto> {
    const user = await this.userModel.findOne({ email })
    return user
  }

  async searchOneUser(email: string): Promise<CreateUserDto> {
    return await this.userModel.findOne({ email })
  }

  async searchAllUsers(): Promise<CreateUserDto[]> {
    return await this.userModel.find({})
  }
}
