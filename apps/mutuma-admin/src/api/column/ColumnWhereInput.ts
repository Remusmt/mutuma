import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { ModelWhereUniqueInput } from "../model/ModelWhereUniqueInput";

export type ColumnWhereInput = {
  id?: StringFilter;
  isPrimaryKey?: BooleanNullableFilter;
  isUnique?: BooleanNullableFilter;
  model?: ModelWhereUniqueInput;
  name?: StringFilter;
};
