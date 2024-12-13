/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { UserDetail } from "./UserDetail";
import { UserDetailCountArgs } from "./UserDetailCountArgs";
import { UserDetailFindManyArgs } from "./UserDetailFindManyArgs";
import { UserDetailFindUniqueArgs } from "./UserDetailFindUniqueArgs";
import { CreateUserDetailArgs } from "./CreateUserDetailArgs";
import { UpdateUserDetailArgs } from "./UpdateUserDetailArgs";
import { DeleteUserDetailArgs } from "./DeleteUserDetailArgs";
import { User } from "../../user/base/User";
import { UserDetailService } from "../userDetail.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => UserDetail)
export class UserDetailResolverBase {
  constructor(
    protected readonly service: UserDetailService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "UserDetail",
    action: "read",
    possession: "any",
  })
  async _userDetailsMeta(
    @graphql.Args() args: UserDetailCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [UserDetail])
  @nestAccessControl.UseRoles({
    resource: "UserDetail",
    action: "read",
    possession: "any",
  })
  async userDetails(
    @graphql.Args() args: UserDetailFindManyArgs
  ): Promise<UserDetail[]> {
    return this.service.userDetails(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => UserDetail, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "UserDetail",
    action: "read",
    possession: "own",
  })
  async userDetail(
    @graphql.Args() args: UserDetailFindUniqueArgs
  ): Promise<UserDetail | null> {
    const result = await this.service.userDetail(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => UserDetail)
  @nestAccessControl.UseRoles({
    resource: "UserDetail",
    action: "create",
    possession: "any",
  })
  async createUserDetail(
    @graphql.Args() args: CreateUserDetailArgs
  ): Promise<UserDetail> {
    return await this.service.createUserDetail({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => UserDetail)
  @nestAccessControl.UseRoles({
    resource: "UserDetail",
    action: "update",
    possession: "any",
  })
  async updateUserDetail(
    @graphql.Args() args: UpdateUserDetailArgs
  ): Promise<UserDetail | null> {
    try {
      return await this.service.updateUserDetail({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => UserDetail)
  @nestAccessControl.UseRoles({
    resource: "UserDetail",
    action: "delete",
    possession: "any",
  })
  async deleteUserDetail(
    @graphql.Args() args: DeleteUserDetailArgs
  ): Promise<UserDetail | null> {
    try {
      return await this.service.deleteUserDetail(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async getUser(@graphql.Parent() parent: UserDetail): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
