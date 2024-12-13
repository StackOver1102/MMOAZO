import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type DetailProductCreateInput = {
  description?: string | null;
  feature?: string | null;
  product?: ProductWhereUniqueInput | null;
  quantity?: number | null;
  value?: string | null;
};
