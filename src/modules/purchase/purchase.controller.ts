import { Controller, Get } from "@nestjs/common";

@Controller('purchase')
export class PurchaseController{
  @Get()
  find(){
    return {message: "Hello World"};
  }
}