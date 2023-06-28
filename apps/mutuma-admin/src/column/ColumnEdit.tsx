import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { ModelTitle } from "../model/ModelTitle";

export const ColumnEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="IsPrimaryKey" source="isPrimaryKey" />
        <BooleanInput label="IsUnique" source="isUnique" />
        <ReferenceInput source="model.id" reference="Model" label="Model">
          <SelectInput optionText={ModelTitle} />
        </ReferenceInput>
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
