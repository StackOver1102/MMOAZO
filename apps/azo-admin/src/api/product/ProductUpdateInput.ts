import { DetailProductUpdateManyWithoutProductsInput } from "./DetailProductUpdateManyWithoutProductsInput";
import { OrderDetailUpdateManyWithoutProductsInput } from "./OrderDetailUpdateManyWithoutProductsInput";
import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";

export type ProductUpdateInput = {
  detailProducts?: DetailProductUpdateManyWithoutProductsInput;
  name?: string | null;
  orderDetails?: OrderDetailUpdateManyWithoutProductsInput;
  price?: number | null;
  service?: ServiceWhereUniqueInput | null;
};
