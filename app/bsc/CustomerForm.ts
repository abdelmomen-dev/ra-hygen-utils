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
        
           
  <NumberInput
    source="code"
    headerClassName={defaultClss.header}
    label="custom_root.main.code"
  />
    
        
           
  <TextInput
    source="phone"
    headerClassName={defaultClss.header}
    label="custom_root.main.phone"
  />
    
        
    </SimpleForm>
  );
}
