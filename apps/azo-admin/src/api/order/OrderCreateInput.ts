import { OrderDetailCreateNestedManyWithoutOrdersInput } from "./OrderDetailCreateNestedManyWithoutOrdersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderCreateInput = {
  orderDate?: Date | null;
  orderDetails?: OrderDetailCreateNestedManyWithoutOrdersInput;
  orderNumber?: string | null;
  paymentStatus?: "Unpaid" | "Paid" | null;
  status?: "Option1" | null;
  totalAmount?: number | null;
  user?: UserWhereUniqueInput | null;
};
