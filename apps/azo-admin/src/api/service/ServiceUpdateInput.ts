import { ProductUpdateManyWithoutServicesInput } from "./ProductUpdateManyWithoutServicesInput";

export type ServiceUpdateInput = {
  description?: string | null;
  details?: string | null;
  name?: string | null;
  products?: ProductUpdateManyWithoutServicesInput;
  typeField?: "Option1" | null;
};
