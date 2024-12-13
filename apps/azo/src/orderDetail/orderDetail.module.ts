import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { OrderDetailModuleBase } from "./base/orderDetail.module.base";
import { OrderDetailService } from "./orderDetail.service";
import { OrderDetailController } from "./orderDetail.controller";

@Module({
  imports: [OrderDetailModuleBase, forwardRef(() => AuthModule)],
  controllers: [OrderDetailController],
  providers: [OrderDetailService],
  exports: [OrderDetailService],
})
export class OrderDetailModule {}
