import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { UserDetailListRelationFilter } from "../userDetail/UserDetailListRelationFilter";
import { WalletListRelationFilter } from "../wallet/WalletListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  orders?: OrderListRelationFilter;
  phone?: StringNullableFilter;
  status?: "Active" | "Inactive";
  userDetails?: UserDetailListRelationFilter;
  username?: StringFilter;
  wallets?: WalletListRelationFilter;
};
