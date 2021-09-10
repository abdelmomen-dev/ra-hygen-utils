import React from "react";
import {
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
  useLocale,
} from "react-admin";
import { useMyDefaultStyles } from "../../../styles/default";

export default function CustomerForm(props: any) {
  const classes = useMyDefaultStyles();
  return (
    <SimpleForm {...props}>
        
           
  <TextInput
    source="code"
    headerClassName={defaultClss.header}
    label="custom_root.main.code"
  />
  
        
           
<ReferenceInput
source="customer_type_id"
reference="bsc_customer_type"
headerClassName={defaultClss.header}
label="custom_root.main.customer_type"
>
  <SelectInput optionText="label" />
</ReferenceInput>
  
        
           
<ReferenceInput
source="city_id"
reference="mnt_city"
headerClassName={defaultClss.header}
label="custom_root.main.city"
>
  <SelectInput optionText="label" />
</ReferenceInput>
  
        
          
  <TextInput
    source="phone"
    headerClassName={defaultClss.header}
    label="custom_root.main.phone"
  />
  
        
    </SimpleForm>
  );
}
