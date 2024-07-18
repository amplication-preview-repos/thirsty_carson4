import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { LeadTitle } from "../lead/LeadTitle";

export const TaskEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <DateTimeInput label="dateAndTime" source="dateAndTime" />
        <ReferenceInput source="lead.id" reference="Lead" label="Lead">
          <SelectInput optionText={LeadTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
