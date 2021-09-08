export default function BscCustomerList(props: any) {
  const classes = useMyDefaultStyles();
  return (
    <>
    <List {...props}>
      <Datagrid rowClick="edit">
          
            id
            
            
            
          
            code
            
             
               
<NumberField
  source="code"
  label="custom_root.main.code"
  headerClassName={defaultClss.header}
/>;
  
            
            
          
            created_at
            
            
             
               
  <DateField
    source="created_at"
    headerClassName={defaultClss.header}
    label="custom_root.main.created_at"
  />
    
            
          
            updated_at
            
            
             
               
  <DateField
    source="updated_at"
    headerClassName={defaultClss.header}
    label="custom_root.main.updated_at"
  />
    
            
          
            name
            
            
            
          
            ext_data
            
            
            
          
            deleted_at
            
            
             
               
  <DateField
    source="deleted_at"
    headerClassName={defaultClss.header}
    label="custom_root.main.deleted_at"
  />
    
            
          
            customer_type_id
            
            
            
          
            fullname
             
               
<TextField
  source="fullname"
  headerClassName={defaultClss.header}
  label="custom_root.main.fullname"
/>
  
            
            
            
          
            city_id
            
            
            
          
            phone
             
               
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
