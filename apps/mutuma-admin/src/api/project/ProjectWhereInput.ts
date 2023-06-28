import { StringFilter } from "../../util/StringFilter";
import { ModelListRelationFilter } from "../model/ModelListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectWhereInput = {
  id?: StringFilter;
  models?: ModelListRelationFilter;
  name?: StringFilter;
  user?: UserWhereUniqueInput;
};
