import { Controller, Get } from "@nestjs/common";

@Controller('provider')
export class ProviderController{
  @Get()
  find(){
    return {message: "Hello World"};
  }
}