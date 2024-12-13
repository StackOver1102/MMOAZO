import { DetailProductCreateNestedManyWithoutProductsInput } from "./DetailProductCreateNestedManyWithoutProductsInput";
import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";

export type ProductCreateInput = {
  detailProducts?: DetailProductCreateNestedManyWithoutProductsInput;
  name?: string | null;
  price?: number | null;
  service?: ServiceWhereUniqueInput | null;
};
