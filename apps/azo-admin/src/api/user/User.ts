import { Order } from "../order/Order";
import { JsonValue } from "type-fest";
import { UserDetail } from "../userDetail/UserDetail";
import { Wallet } from "../wallet/Wallet";

export type User = {
  createdAt: Date;
  email: string | null;
  id: string;
  orders?: Array<Order>;
  phone: string | null;
  roles: JsonValue;
  status?: "Active" | "Inactive" | null;
  updatedAt: Date;
  userDetails?: Array<UserDetail>;
  username: string;
  wallets?: Array<Wallet>;
};
