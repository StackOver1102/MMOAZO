import { TransactionUpdateManyWithoutWalletsInput } from "./TransactionUpdateManyWithoutWalletsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WalletUpdateInput = {
  balance?: number | null;
  currency?: string | null;
  transactions?: TransactionUpdateManyWithoutWalletsInput;
  typeField?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
