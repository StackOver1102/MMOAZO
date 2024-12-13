import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type DetailProductUpdateInput = {
  description?: string | null;
  feature?: string | null;
  product?: ProductWhereUniqueInput | null;
  quantity?: number | null;
  value?: string | null;
};
