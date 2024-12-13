import { SortOrder } from "../../util/SortOrder";

export type ServiceOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  details?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  provider?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
