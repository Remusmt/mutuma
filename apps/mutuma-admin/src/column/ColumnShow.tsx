import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { MODEL_TITLE_FIELD } from "../model/ModelTitle";

export const ColumnShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <BooleanField label="IsPrimaryKey" source="isPrimaryKey" />
        <BooleanField label="IsUnique" source="isUnique" />
        <ReferenceField label="Model" source="model.id" reference="Model">
          <TextField source={MODEL_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
