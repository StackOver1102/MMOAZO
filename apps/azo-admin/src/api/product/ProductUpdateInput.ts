import { DetailProductUpdateManyWithoutProductsInput } from "./DetailProductUpdateManyWithoutProductsInput";
import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";

export type ProductUpdateInput = {
  detailProducts?: DetailProductUpdateManyWithoutProductsInput;
  name?: string | null;
  price?: number | null;
  service?: ServiceWhereUniqueInput | null;
};
