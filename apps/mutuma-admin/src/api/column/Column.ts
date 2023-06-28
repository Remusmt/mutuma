import { Model } from "../model/Model";

export type Column = {
  createdAt: Date;
  id: string;
  isPrimaryKey: boolean | null;
  isUnique: boolean | null;
  model?: Model | null;
  name: string;
  updatedAt: Date;
};
