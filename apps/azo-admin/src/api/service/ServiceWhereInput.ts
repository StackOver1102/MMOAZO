import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";

export type ServiceWhereInput = {
  description?: StringNullableFilter;
  details?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  products?: ProductListRelationFilter;
  typeField?: "Option1";
};
