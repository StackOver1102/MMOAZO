import { DetailProduct } from "../detailProduct/DetailProduct";
import { OrderDetail } from "../orderDetail/OrderDetail";
import { Service } from "../service/Service";

export type Product = {
  createdAt: Date;
  detailProducts?: Array<DetailProduct>;
  id: string;
  name: string | null;
  orderDetails?: Array<OrderDetail>;
  price: number | null;
  service?: Service | null;
  updatedAt: Date;
};
