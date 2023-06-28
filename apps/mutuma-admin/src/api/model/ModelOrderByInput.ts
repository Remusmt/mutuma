import { SortOrder } from "../../util/SortOrder";

export type ModelOrderByInput = {
  comments?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  projectId?: SortOrder;
  updatedAt?: SortOrder;
};
