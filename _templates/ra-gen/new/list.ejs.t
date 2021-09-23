---
_ResourceNameList: <% ResourceNameList = h.inflection.camelize(resourceName)+`List` %>
to: <%= predir+ResourceNameList %>.ts
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
    * use _gen_ with jsonb
     %>
      <List {...props}>
        <Datagrid rowClick="edit">
            <% raFields.forEach((field)=>{ %>
              <%- include(templates+fieldsTmpPath+field.tmp_name,{field}) -%> 
            <%})%>
        </Datagrid>
      </List>
    </>
  );
}
