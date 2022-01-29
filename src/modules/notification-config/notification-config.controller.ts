import { Controller, Get } from "@nestjs/common";

@Controller('notification-config')
export class NotificationConfigController{
  @Get()
  find(){
    return {message: "Hello World"};
  }
}