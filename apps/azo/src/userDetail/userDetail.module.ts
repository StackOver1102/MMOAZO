import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserDetailModuleBase } from "./base/userDetail.module.base";
import { UserDetailService } from "./userDetail.service";
import { UserDetailController } from "./userDetail.controller";
import { UserDetailResolver } from "./userDetail.resolver";

@Module({
  imports: [UserDetailModuleBase, forwardRef(() => AuthModule)],
  controllers: [UserDetailController],
  providers: [UserDetailService, UserDetailResolver],
  exports: [UserDetailService],
})
export class UserDetailModule {}
