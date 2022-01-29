import { Controller, Get } from "@nestjs/common";

@Controller('product')
export class ProductController{
  @Get()
  find(){
    return {message: "Hello World"};
  }
}