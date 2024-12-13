import { SortOrder } from "../../util/SortOrder";

export type DetailProductOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  feature?: SortOrder;
  id?: SortOrder;
  productId?: SortOrder;
  quantity?: SortOrder;
  updatedAt?: SortOrder;
  value?: SortOrder;
};
