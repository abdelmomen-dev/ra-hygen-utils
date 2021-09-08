export default function BscCustomerList(props: any) {
  const classes = useMyDefaultStyles();
  return (
    <>
    id,uuid,NULL,code,integer,NULL,created_at,timestamp with time zone,NULL,updated_at,timestamp with time zone,NULL,name,jsonb,NULL,ext_data,jsonb,NULL,deleted_at,timestamp with time zone,NULL,customer_type_id,uuid,NULL,fullname,text,NULL,city_id,uuid,NULL,phone,text,NULL
    <List {...props}>
      <Datagrid rowClick="edit">
          <TextField
            source="properties.name_ar"
            label="Name Ar"
            headerClassName={classes.header}
          />
        </Datagrid>
      </List>
    </>
  );
}
