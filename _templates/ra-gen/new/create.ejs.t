---
_ResourceName: <% ResourceName = h.inflection.camelize(resourceName) %>
_ResourceNameCreate: <% ResourceNameCreate = h.inflection.camelize(resourceName)+`Create` %>
to: <%= predir+ResourceNameCreate %>.tsx
force: true
---

import React from 'react';
import { Create, CreateProps } from 'react-admin';
import <%= ResourceName %>Form from './<%= ResourceName %>Form';

export default function <%= ResourceNameCreate %>(props: CreateProps) {
  return (
    <Create {...props}>
      <<%= ResourceName %>Form {...props} />
    </Create>
  );
}
