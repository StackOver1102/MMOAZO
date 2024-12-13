import { DetailProductWhereInput } from "./DetailProductWhereInput";
import { DetailProductOrderByInput } from "./DetailProductOrderByInput";

export type DetailProductFindManyArgs = {
  where?: DetailProductWhereInput;
  orderBy?: Array<DetailProductOrderByInput>;
  skip?: number;
  take?: number;
};
