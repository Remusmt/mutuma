import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { MODEL_TITLE_FIELD } from "../model/ModelTitle";

export const ColumnList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Columns"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <BooleanField label="IsPrimaryKey" source="isPrimaryKey" />
        <BooleanField label="IsUnique" source="isUnique" />
        <ReferenceField label="Model" source="model.id" reference="Model">
          <TextField source={MODEL_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
