import { ColumnListRelationFilter } from "../column/ColumnListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type ModelWhereInput = {
  columns?: ColumnListRelationFilter;
  comments?: StringNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
  project?: ProjectWhereUniqueInput;
};
