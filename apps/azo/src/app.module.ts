import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { UserDetailModule } from "./userDetail/userDetail.module";
import { WalletModule } from "./wallet/wallet.module";
import { TransactionModule } from "./transaction/transaction.module";
import { ServiceModule } from "./service/service.module";
import { ProductModule } from "./product/product.module";
import { DetailProductModule } from "./detailProduct/detailProduct.module";
import { OrderModule } from "./order/order.module";
import { OrderDetailModule } from "./orderDetail/orderDetail.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule } from "@nestjs/config";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    UserModule,
    UserDetailModule,
    WalletModule,
    TransactionModule,
    ServiceModule,
    ProductModule,
    DetailProductModule,
    OrderModule,
    OrderDetailModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
  ],
  providers: [],
})
export class AppModule {}
