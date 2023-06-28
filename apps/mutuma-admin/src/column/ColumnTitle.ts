import { Column as TColumn } from "../api/column/Column";

export const COLUMN_TITLE_FIELD = "name";

export const ColumnTitle = (record: TColumn): string => {
  return record.name || String(record.id);
};
