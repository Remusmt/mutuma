import { ModelWhereUniqueInput } from "../model/ModelWhereUniqueInput";

export type ColumnUpdateInput = {
  isPrimaryKey?: boolean | null;
  isUnique?: boolean | null;
  model?: ModelWhereUniqueInput | null;
  name?: string;
};
