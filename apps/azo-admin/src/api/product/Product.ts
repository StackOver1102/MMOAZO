import { DetailProduct } from "../detailProduct/DetailProduct";
import { Service } from "../service/Service";

export type Product = {
  createdAt: Date;
  detailProducts?: Array<DetailProduct>;
  id: string;
  name: string | null;
  price: number | null;
  service?: Service | null;
  updatedAt: Date;
};
