/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { DetailProductWhereUniqueInput } from "../../detailProduct/base/DetailProductWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class DetailProductUpdateManyWithoutProductsInput {
  @Field(() => [DetailProductWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DetailProductWhereUniqueInput],
  })
  connect?: Array<DetailProductWhereUniqueInput>;

  @Field(() => [DetailProductWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DetailProductWhereUniqueInput],
  })
  disconnect?: Array<DetailProductWhereUniqueInput>;

  @Field(() => [DetailProductWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DetailProductWhereUniqueInput],
  })
  set?: Array<DetailProductWhereUniqueInput>;
}

export { DetailProductUpdateManyWithoutProductsInput as DetailProductUpdateManyWithoutProductsInput };