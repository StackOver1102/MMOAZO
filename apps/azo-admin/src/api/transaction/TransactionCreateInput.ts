import { WalletWhereUniqueInput } from "../wallet/WalletWhereUniqueInput";

export type TransactionCreateInput = {
  amount?: number | null;
  status?: "Option1" | null;
  transactionDate?: Date | null;
  typeField?: "Option1" | null;
  wallet?: WalletWhereUniqueInput | null;
};
