import { Product } from "../product/Product";

export type Service = {
  createdAt: Date;
  description: string | null;
  details: string | null;
  id: string;
  name: string | null;
  products?: Array<Product>;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
