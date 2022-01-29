import { Controller, Get } from "@nestjs/common";

@Controller('requester')
export class RequesterController{
  @Get()
  find(){
    return {message: "Hello World"};
  }
}