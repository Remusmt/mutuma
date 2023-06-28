import { ModelWhereUniqueInput } from "../model/ModelWhereUniqueInput";

export type ColumnCreateInput = {
  isPrimaryKey?: boolean | null;
  isUnique?: boolean | null;
  model?: ModelWhereUniqueInput | null;
  name: string;
};
