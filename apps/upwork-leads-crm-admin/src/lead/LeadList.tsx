import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const LeadList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Leads"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
