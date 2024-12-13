/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";

import {
  IsDate,
  IsOptional,
  ValidateNested,
  IsString,
  MaxLength,
  IsEnum,
  IsNumber,
  Min,
  Max,
} from "class-validator";

import { Type } from "class-transformer";
import { OrderDetailCreateNestedManyWithoutOrdersInput } from "./OrderDetailCreateNestedManyWithoutOrdersInput";
import { EnumOrderPaymentStatus } from "./EnumOrderPaymentStatus";
import { EnumOrderStatus } from "./EnumOrderStatus";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class OrderCreateInput {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  orderDate?: Date | null;

  @ApiProperty({
    required: false,
    type: () => OrderDetailCreateNestedManyWithoutOrdersInput,
  })
  @ValidateNested()
  @Type(() => OrderDetailCreateNestedManyWithoutOrdersInput)
  @IsOptional()
  @Field(() => OrderDetailCreateNestedManyWithoutOrdersInput, {
    nullable: true,
  })
  orderDetails?: OrderDetailCreateNestedManyWithoutOrdersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  orderNumber?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumOrderPaymentStatus,
  })
  @IsEnum(EnumOrderPaymentStatus)
  @IsOptional()
  @Field(() => EnumOrderPaymentStatus, {
    nullable: true,
  })
  paymentStatus?: "Unpaid" | "Paid" | null;

  @ApiProperty({
    required: false,
    enum: EnumOrderStatus,
  })
  @IsEnum(EnumOrderStatus)
  @IsOptional()
  @Field(() => EnumOrderStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  totalAmount?: number | null;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;
}

export { OrderCreateInput as OrderCreateInput };
