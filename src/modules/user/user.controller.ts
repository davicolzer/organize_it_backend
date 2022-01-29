import { Controller, Get } from "@nestjs/common";

@Controller('user')
export class UserController{
  @Get()
  find(){
    return {message: "Hello World"};
  }
}