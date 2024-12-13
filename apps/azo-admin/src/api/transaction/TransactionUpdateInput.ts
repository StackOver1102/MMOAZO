import { WalletWhereUniqueInput } from "../wallet/WalletWhereUniqueInput";

export type TransactionUpdateInput = {
  amount?: number | null;
  status?: "Option1" | null;
  transactionDate?: Date | null;
  typeField?: "Option1" | null;
  wallet?: WalletWhereUniqueInput | null;
};
