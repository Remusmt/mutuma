import { Model } from "../model/Model";
import { User } from "../user/User";

export type Project = {
  createdAt: Date;
  id: string;
  models?: Array<Model>;
  name: string;
  updatedAt: Date;
  user?: User;
};
