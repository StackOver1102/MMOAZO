import { UserDetail as TUserDetail } from "../api/userDetail/UserDetail";

export const USERDETAIL_TITLE_FIELD = "firstName";

export const UserDetailTitle = (record: TUserDetail): string => {
  return record.firstName?.toString() || String(record.id);
};
