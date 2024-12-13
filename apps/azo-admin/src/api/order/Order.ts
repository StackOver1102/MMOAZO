import { OrderDetail } from "../orderDetail/OrderDetail";
import { User } from "../user/User";

export type Order = {
  createdAt: Date;
  id: string;
  orderDate: Date | null;
  orderDetails?: Array<OrderDetail>;
  orderNumber: string | null;
  paymentStatus?: "Unpaid" | "Paid" | null;
  status?: "Option1" | null;
  totalAmount: number | null;
  updatedAt: Date;
  user?: User | null;
};
