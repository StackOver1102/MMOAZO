import { Product } from "../product/Product";

export type DetailProduct = {
  createdAt: Date;
  description: string | null;
  feature: string | null;
  id: string;
  product?: Product | null;
  quantity: number | null;
  updatedAt: Date;
  value: string | null;
};
