import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DetailProductService } from "./detailProduct.service";
import { DetailProductControllerBase } from "./base/detailProduct.controller.base";

@swagger.ApiTags("detailProducts")
@common.Controller("detailProducts")
export class DetailProductController extends DetailProductControllerBase {
  constructor(
    protected readonly service: DetailProductService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
