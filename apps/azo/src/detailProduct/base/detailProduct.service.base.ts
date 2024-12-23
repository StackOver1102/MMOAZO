/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  DetailProduct as PrismaDetailProduct,
  Product as PrismaProduct,
} from "@prisma/client";

export class DetailProductServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.DetailProductCountArgs, "select">
  ): Promise<number> {
    return this.prisma.detailProduct.count(args);
  }

  async detailProducts(
    args: Prisma.DetailProductFindManyArgs
  ): Promise<PrismaDetailProduct[]> {
    return this.prisma.detailProduct.findMany(args);
  }
  async detailProduct(
    args: Prisma.DetailProductFindUniqueArgs
  ): Promise<PrismaDetailProduct | null> {
    return this.prisma.detailProduct.findUnique(args);
  }
  async createDetailProduct(
    args: Prisma.DetailProductCreateArgs
  ): Promise<PrismaDetailProduct> {
    return this.prisma.detailProduct.create(args);
  }
  async updateDetailProduct(
    args: Prisma.DetailProductUpdateArgs
  ): Promise<PrismaDetailProduct> {
    return this.prisma.detailProduct.update(args);
  }
  async deleteDetailProduct(
    args: Prisma.DetailProductDeleteArgs
  ): Promise<PrismaDetailProduct> {
    return this.prisma.detailProduct.delete(args);
  }

  async getProduct(parentId: string): Promise<PrismaProduct | null> {
    return this.prisma.detailProduct
      .findUnique({
        where: { id: parentId },
      })
      .product();
  }
}
