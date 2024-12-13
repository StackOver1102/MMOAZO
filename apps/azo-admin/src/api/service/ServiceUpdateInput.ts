import { ProductUpdateManyWithoutServicesInput } from "./ProductUpdateManyWithoutServicesInput";

export type ServiceUpdateInput = {
  description?: string | null;
  details?: string | null;
  name?: string | null;
  products?: ProductUpdateManyWithoutServicesInput;
  provider?: string | null;
  typeField?: "Option1" | null;
};
