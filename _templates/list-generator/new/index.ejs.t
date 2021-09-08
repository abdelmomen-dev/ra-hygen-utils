---
_ResourceNameList: <% ResourceNameList = h.inflection.camelize(resourceName)+`List` %>
to: app/<%= ResourceNameList %>.ts
force: true
---
export default function <%= ResourceNameList %>(props: any) {
  const classes = useMyDefaultStyles();
  return (
    <>
    <%= tableCols %>
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
