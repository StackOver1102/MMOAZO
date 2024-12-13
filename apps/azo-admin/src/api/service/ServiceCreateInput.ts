import { ProductCreateNestedManyWithoutServicesInput } from "./ProductCreateNestedManyWithoutServicesInput";

export type ServiceCreateInput = {
  description?: string | null;
  details?: string | null;
  name?: string | null;
  products?: ProductCreateNestedManyWithoutServicesInput;
  provider?: string | null;
  typeField?: "Option1" | null;
};
