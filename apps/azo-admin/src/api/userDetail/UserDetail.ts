import { User } from "../user/User";

export type UserDetail = {
  birthdate: Date | null;
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  phoneNumber: string | null;
  updatedAt: Date;
  user?: User | null;
};
