import { ProductCreateNestedManyWithoutServicesInput } from "./ProductCreateNestedManyWithoutServicesInput";

export type ServiceCreateInput = {
  description?: string | null;
  details?: string | null;
  name?: string | null;
  products?: ProductCreateNestedManyWithoutServicesInput;
  typeField?: "Option1" | null;
};
