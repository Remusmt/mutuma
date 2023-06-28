import { ColumnUpdateManyWithoutModelsInput } from "./ColumnUpdateManyWithoutModelsInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type ModelUpdateInput = {
  columns?: ColumnUpdateManyWithoutModelsInput;
  comments?: string | null;
  name?: string;
  project?: ProjectWhereUniqueInput | null;
};
