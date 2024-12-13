import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DetailProductModuleBase } from "./base/detailProduct.module.base";
import { DetailProductService } from "./detailProduct.service";
import { DetailProductController } from "./detailProduct.controller";
import { DetailProductResolver } from "./detailProduct.resolver";

@Module({
  imports: [DetailProductModuleBase, forwardRef(() => AuthModule)],
  controllers: [DetailProductController],
  providers: [DetailProductService, DetailProductResolver],
  exports: [DetailProductService],
})
export class DetailProductModule {}
