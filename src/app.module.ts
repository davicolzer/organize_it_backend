import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyController } from './modules/company/company.controller';
import { LogController } from './modules/log/log.controller';
import { NotificationConfigController } from './modules/notification-config/notification-config.controller';
import { ProductBrandController } from './modules/product-brand/product-brand.controller';
import { ProductModelController } from './modules/product-model/product-model.controller';
import { ProductController } from './modules/product/product.controller';
import { ProviderController } from './modules/provider/provider.controller';
import { PurchaseController } from './modules/purchase/purchase.controller';
import { RequesterController } from './modules/requester/requester.controller';
import { RoleController } from './modules/role/role.controller';
import { UserController } from './modules/user/user.controller';
import { PrismaService } from './services/prisma.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    UserController,
    RoleController,
    ProductController,
    CompanyController,
    LogController,
    NotificationConfigController,
    ProductBrandController,
    ProductModelController,
    ProviderController,
    PurchaseController,
    RequesterController,
  ],
  providers: [AppService, PrismaService],
})
export class AppModule { }
