import { Controller, Get } from "@nestjs/common";

@Controller('role')
export class RoleController{
  @Get()
  find(){
    return {message: "Hello World"};
  }
}