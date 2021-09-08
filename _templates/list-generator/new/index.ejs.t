---
_ResourceNameList: <% ResourceNameList = h.inflection.camelize(resourceName)+`List` %>
to: app/<%= ResourceNameList %>.ts
force: true
---

import React from "react";
import {
  Datagrid,
  DateField,
  List,
  ListProps,
  NumberField,
  ReferenceField,
  ReferenceInput,
  SelectInput,
  TextField,
  TextInput,
  useLocale,
} from "react-admin";
import { useMyDefaultStyles } from "../../../styles/default";

export default function <%= ResourceNameList %>(props: any) {
  const classes = useMyDefaultStyles();
  return (
    <>
    <%# 
    * cover all types as tmpl
    * use _gen_igonre to skip field
    * use _gen_ with jsonb
    * 
    %> 
    <List {...props}>
      <Datagrid rowClick="edit">
          <% tableCols.forEach((col)=>{ %>
            <% if (col['data_type'] === 'text') { %> 
              <%- include(templates+fieldsTmpPath+'text',{col}) %> 
            <% } %>
            <% if (col['data_type'] === 'integer') { %> 
              <%- include(templates+fieldsTmpPath+'integer',{col}) %> 
            <% } %>
            <% if (col['data_type'] === 'timestamp') { %> 
              <%- include(templates+fieldsTmpPath+'timestamp',{col}) %> 
            <% } %>
          <%})%>
        </Datagrid>
      </List>
    </>
  );
}
