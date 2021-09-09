---
_ResourceName: <% ResourceName = h.inflection.camelize(resourceName) %>
_ResourceNameEdit: <% ResourceNameEdit = h.inflection.camelize(resourceName)+`Edit` %>
to: app/<%= predir+ResourceNameEdit %>.ts
force: true
---

import React from 'react';
import { Edit, EditProps } from 'react-admin';
import <%= ResourceName %>Form from './<%= ResourceName %>Form';

export default function <%= ResourceNameEdit %>(props: EditProps) {
  return (
    <Edit {...props}>
      <Datagrid rowClick="edit">
        <<%= ResourceName %>Form {...props} />
      </Datagrid>
    </Edit>
  );
}
