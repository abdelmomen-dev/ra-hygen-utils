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

export default function CustomerList(props: any) {
  const classes = useMyDefaultStyles();
  return (
    <>
    
      <List {...props}>
        <Datagrid rowClick="edit">
            
               
<NumberField
  source="code"
  label="custom_root.main.code"
  headerClassName={defaultClss.header}
/>;
 
            
               
<TextField
  source="phone"
  headerClassName={defaultClss.header}
  label="custom_root.main.phone"
/>
  
            
        </Datagrid>
      </List>
    </>
  );
}
