import { Controller, Get } from "@nestjs/common";

@Controller('log')
export class LogController{
  @Get()
  find(){
    return {message: "Hello World"};
  }
}