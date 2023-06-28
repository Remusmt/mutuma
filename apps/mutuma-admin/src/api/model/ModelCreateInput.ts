import { ColumnCreateNestedManyWithoutModelsInput } from "./ColumnCreateNestedManyWithoutModelsInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type ModelCreateInput = {
  columns?: ColumnCreateNestedManyWithoutModelsInput;
  comments?: string | null;
  name: string;
  project?: ProjectWhereUniqueInput | null;
};
