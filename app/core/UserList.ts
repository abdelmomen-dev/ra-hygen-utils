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

export default function UserList(props: any) {
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
  source="email"
  headerClassName={defaultClss.header}
  label="custom_root.main.email"
/>
  
          
             
<TextField
  source="phone"
  headerClassName={defaultClss.header}
  label="custom_root.main.phone"
/>
  
          
             
<TextField
  source="passwired"
  headerClassName={defaultClss.header}
  label="custom_root.main.passwired"
/>
  
          
             
<TextField
  source="fullname"
  headerClassName={defaultClss.header}
  label="custom_root.main.fullname"
/>
  
          
        </Datagrid>
      </List>
    </>
  );
}
