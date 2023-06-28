import { SortOrder } from "../../util/SortOrder";

export type ColumnOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  isPrimaryKey?: SortOrder;
  isUnique?: SortOrder;
  modelId?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
