import { SortOrder } from "../../util/SortOrder";

export type OrderDetailOrderByInput = {
  createdAt?: SortOrder;
  discount?: SortOrder;
  id?: SortOrder;
  orderId?: SortOrder;
  price?: SortOrder;
  productId?: SortOrder;
  quantity?: SortOrder;
  total?: SortOrder;
  updatedAt?: SortOrder;
};
