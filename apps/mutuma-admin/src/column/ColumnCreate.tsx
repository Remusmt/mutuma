import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { ModelTitle } from "../model/ModelTitle";

export const ColumnCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="IsPrimaryKey" source="isPrimaryKey" />
        <BooleanInput label="IsUnique" source="isUnique" />
        <ReferenceInput source="model.id" reference="Model" label="Model">
          <SelectInput optionText={ModelTitle} />
        </ReferenceInput>
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Create>
  );
};
