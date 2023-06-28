import { ModelCreateNestedManyWithoutProjectsInput } from "./ModelCreateNestedManyWithoutProjectsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectCreateInput = {
  models?: ModelCreateNestedManyWithoutProjectsInput;
  name: string;
  user: UserWhereUniqueInput;
};
