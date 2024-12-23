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
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
  IsEnum,
} from "class-validator";
import { ProductCreateNestedManyWithoutServicesInput } from "./ProductCreateNestedManyWithoutServicesInput";
import { Type } from "class-transformer";
import { EnumServiceTypeField } from "./EnumServiceTypeField";

@InputType()
class ServiceCreateInput {
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
  description?: string | null;

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
  details?: string | null;

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
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => ProductCreateNestedManyWithoutServicesInput,
  })
  @ValidateNested()
  @Type(() => ProductCreateNestedManyWithoutServicesInput)
  @IsOptional()
  @Field(() => ProductCreateNestedManyWithoutServicesInput, {
    nullable: true,
  })
  products?: ProductCreateNestedManyWithoutServicesInput;

  @ApiProperty({
    required: false,
    enum: EnumServiceTypeField,
  })
  @IsEnum(EnumServiceTypeField)
  @IsOptional()
  @Field(() => EnumServiceTypeField, {
    nullable: true,
  })
  typeField?: "Option1" | null;
}

export { ServiceCreateInput as ServiceCreateInput };
