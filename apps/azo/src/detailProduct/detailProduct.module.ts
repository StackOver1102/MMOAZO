import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DetailProductModuleBase } from "./base/detailProduct.module.base";
import { DetailProductService } from "./detailProduct.service";
import { DetailProductController } from "./detailProduct.controller";

@Module({
  imports: [DetailProductModuleBase, forwardRef(() => AuthModule)],
  controllers: [DetailProductController],
  providers: [DetailProductService],
  exports: [DetailProductService],
})
export class DetailProductModule {}
