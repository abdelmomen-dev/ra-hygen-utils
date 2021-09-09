import React from 'react';
import { Create, CreateProps } from 'react-admin';
import CustomerForm from './CustomerForm';

export default function CustomerCreate(props: CreateProps) {
  return (
    <Create {...props}>
      <Datagrid rowClick="create">
        <CustomerForm {...props} />
      </Datagrid>
    </Create>
  );
}
