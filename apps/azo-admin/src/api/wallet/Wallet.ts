import { Transaction } from "../transaction/Transaction";
import { User } from "../user/User";

export type Wallet = {
  balance: number | null;
  createdAt: Date;
  currency: string | null;
  id: string;
  transactions?: Array<Transaction>;
  typeField?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
