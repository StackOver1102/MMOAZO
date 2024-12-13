import { DetailProductCreateNestedManyWithoutProductsInput } from "./DetailProductCreateNestedManyWithoutProductsInput";
import { OrderDetailCreateNestedManyWithoutProductsInput } from "./OrderDetailCreateNestedManyWithoutProductsInput";
import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";

export type ProductCreateInput = {
  detailProducts?: DetailProductCreateNestedManyWithoutProductsInput;
  name?: string | null;
  orderDetails?: OrderDetailCreateNestedManyWithoutProductsInput;
  price?: number | null;
  service?: ServiceWhereUniqueInput | null;
};
