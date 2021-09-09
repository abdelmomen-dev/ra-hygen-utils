import React from 'react';
import { Edit, EditProps } from 'react-admin';
import CustomerForm from './CustomerForm';

export default function CustomerEdit(props: EditProps) {
  return (
    <Edit {...props}>
      <Datagrid rowClick="edit">
        <CustomerForm {...props} />
      </Datagrid>
    </Edit>
  );
}
