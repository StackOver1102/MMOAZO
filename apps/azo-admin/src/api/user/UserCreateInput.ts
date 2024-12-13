import { OrderCreateNestedManyWithoutUsersInput } from "./OrderCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { UserDetailCreateNestedManyWithoutUsersInput } from "./UserDetailCreateNestedManyWithoutUsersInput";
import { WalletCreateNestedManyWithoutUsersInput } from "./WalletCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  orders?: OrderCreateNestedManyWithoutUsersInput;
  password: string;
  phone?: string | null;
  roles: InputJsonValue;
  status?: "Active" | "Inactive" | null;
  userDetails?: UserDetailCreateNestedManyWithoutUsersInput;
  username: string;
  wallets?: WalletCreateNestedManyWithoutUsersInput;
};
