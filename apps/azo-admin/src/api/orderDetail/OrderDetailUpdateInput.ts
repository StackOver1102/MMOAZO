import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OrderDetailUpdateInput = {
  discount?: number | null;
  order?: OrderWhereUniqueInput | null;
  price?: number | null;
  product?: ProductWhereUniqueInput | null;
  quantity?: number | null;
  total?: number | null;
};
