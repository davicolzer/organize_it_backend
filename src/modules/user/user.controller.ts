import { Controller, Post, Body, Delete, Param, HttpCode} from "@nestjs/common";
import UserService from "./user.service";
import { Prisma } from "@prisma/client"; 

@Controller('user')
export class UserController{
  constructor(private service: UserService) {}

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    return await this.service.deleteUser(id)
  }

  @Post()
  @HttpCode(201)
  async createUser(
    @Body()
    data: Prisma.UserCreateInput,
  ){
    return await this.service.createUser(data);
  }
}