import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { LEAD_TITLE_FIELD } from "./LeadTitle";

export const LeadShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="name" source="name" />
        <TextField label="company" source="company" />
        <TextField label="upworkProfile" source="upworkProfile" />
        <TextField label="priority" source="priority" />
        <TextField label="projectCost" source="projectCost" />
        <TextField label="estimateInHours" source="estimateInHours" />
        <TextField label="briefDescription" source="briefDescription" />
        <TextField label="responsibleUser" source="responsibleUser" />
        <ReferenceManyField
          reference="Comment"
          target="leadId"
          label="Comments"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="content" source="content" />
            <ReferenceField label="Lead" source="lead.id" reference="Lead">
              <TextField source={LEAD_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Task" target="leadId" label="Tasks">
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="description" source="description" />
            <TextField label="dateAndTime" source="dateAndTime" />
            <ReferenceField label="Lead" source="lead.id" reference="Lead">
              <TextField source={LEAD_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
