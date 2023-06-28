import { ModelUpdateManyWithoutProjectsInput } from "./ModelUpdateManyWithoutProjectsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectUpdateInput = {
  models?: ModelUpdateManyWithoutProjectsInput;
  name?: string;
  user?: UserWhereUniqueInput;
};
