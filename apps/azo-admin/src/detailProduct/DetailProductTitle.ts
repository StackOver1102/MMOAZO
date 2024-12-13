import { DetailProduct as TDetailProduct } from "../api/detailProduct/DetailProduct";

export const DETAILPRODUCT_TITLE_FIELD = "feature";

export const DetailProductTitle = (record: TDetailProduct): string => {
  return record.feature?.toString() || String(record.id);
};
