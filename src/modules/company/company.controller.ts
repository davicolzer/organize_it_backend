import { Controller, Get } from "@nestjs/common";

@Controller('company')
export class CompanyController{
  @Get()
  find(){
    return {message: "Hello World"};
  }
}