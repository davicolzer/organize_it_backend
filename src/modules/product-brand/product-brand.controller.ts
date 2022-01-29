import { Controller, Get } from "@nestjs/common";

@Controller('product-brand')
export class ProductBrandController{
  @Get()
  find(){
    return {message: "Hello World"};
  }
}