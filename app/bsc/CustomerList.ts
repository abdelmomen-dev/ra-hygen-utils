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
 
            
               
<ReferenceField
source="customer_type_id"
reference="bsc_customer_type"
headerClassName={defaultClss.header}
label="custom_root.main.customer_type"
>
  <TextField source="label" />
</ReferenceField>
  
            
               
<ReferenceField
source="city_id"
reference="mnt_city"
headerClassName={defaultClss.header}
label="custom_root.main.city"
>
  <TextField source="label" />
</ReferenceField>
  
            
               
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
