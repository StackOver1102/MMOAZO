import { TransactionCreateNestedManyWithoutWalletsInput } from "./TransactionCreateNestedManyWithoutWalletsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WalletCreateInput = {
  balance?: number | null;
  currency?: string | null;
  transactions?: TransactionCreateNestedManyWithoutWalletsInput;
  typeField?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
