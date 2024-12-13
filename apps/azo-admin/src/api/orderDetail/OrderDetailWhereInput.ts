import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type OrderDetailWhereInput = {
  discount?: FloatNullableFilter;
  id?: StringFilter;
  order?: OrderWhereUniqueInput;
  price?: FloatNullableFilter;
  product?: ProductWhereUniqueInput;
  quantity?: IntNullableFilter;
  total?: FloatNullableFilter;
};
