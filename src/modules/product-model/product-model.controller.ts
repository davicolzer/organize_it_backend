import { Controller, Get } from "@nestjs/common";

@Controller('product-model')
export class ProductModelController {
  @Get()
  find() {
    return { message: "Hello World" };
  }
}