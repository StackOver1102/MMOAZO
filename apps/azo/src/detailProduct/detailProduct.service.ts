import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DetailProductServiceBase } from "./base/detailProduct.service.base";

@Injectable()
export class DetailProductService extends DetailProductServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
