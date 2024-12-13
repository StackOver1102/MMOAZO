import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { OrderDetailModuleBase } from "./base/orderDetail.module.base";
import { OrderDetailService } from "./orderDetail.service";
import { OrderDetailController } from "./orderDetail.controller";
import { OrderDetailResolver } from "./orderDetail.resolver";

@Module({
  imports: [OrderDetailModuleBase, forwardRef(() => AuthModule)],
  controllers: [OrderDetailController],
  providers: [OrderDetailService, OrderDetailResolver],
  exports: [OrderDetailService],
})
export class OrderDetailModule {}
