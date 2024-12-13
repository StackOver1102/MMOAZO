import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserDetailCreateInput = {
  birthdate?: Date | null;
  firstName?: string | null;
  lastName?: string | null;
  phoneNumber?: string | null;
  user?: UserWhereUniqueInput | null;
};
