import { Column } from "../column/Column";
import { Project } from "../project/Project";

export type Model = {
  columns?: Array<Column>;
  comments: string | null;
  createdAt: Date;
  id: string;
  name: string;
  project?: Project | null;
  updatedAt: Date;
};
