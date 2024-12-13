import { OrderDetailUpdateManyWithoutOrdersInput } from "./OrderDetailUpdateManyWithoutOrdersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderUpdateInput = {
  orderDate?: Date | null;
  orderDetails?: OrderDetailUpdateManyWithoutOrdersInput;
  orderNumber?: string | null;
  paymentStatus?: "Unpaid" | "Paid" | null;
  status?: "Option1" | null;
  totalAmount?: number | null;
  user?: UserWhereUniqueInput | null;
};
