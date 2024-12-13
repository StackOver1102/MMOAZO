import { Order } from "../order/Order";
import { Product } from "../product/Product";

export type OrderDetail = {
  createdAt: Date;
  discount: number | null;
  id: string;
  order?: Order | null;
  price: number | null;
  product?: Product | null;
  quantity: number | null;
  total: number | null;
  updatedAt: Date;
};
