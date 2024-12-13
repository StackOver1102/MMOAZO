import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DetailProductResolverBase } from "./base/detailProduct.resolver.base";
import { DetailProduct } from "./base/DetailProduct";
import { DetailProductService } from "./detailProduct.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DetailProduct)
export class DetailProductResolver extends DetailProductResolverBase {
  constructor(
    protected readonly service: DetailProductService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
