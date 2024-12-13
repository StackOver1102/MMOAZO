import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WalletWhereInput = {
  balance?: FloatNullableFilter;
  currency?: StringNullableFilter;
  id?: StringFilter;
  transactions?: TransactionListRelationFilter;
  typeField?: "Option1";
  user?: UserWhereUniqueInput;
};
