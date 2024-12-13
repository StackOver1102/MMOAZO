import { DetailProductListRelationFilter } from "../detailProduct/DetailProductListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";

export type ProductWhereInput = {
  detailProducts?: DetailProductListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
  service?: ServiceWhereUniqueInput;
};
