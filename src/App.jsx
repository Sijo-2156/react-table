import React from "react";
import set from "lodash/fp/set";
import { Field } from "redux-form";
import Table from "react-table";
import * as BS from "react-bootstrap";
import initialData from "./dataFactory";
import FormProvider from "./FormProvider";
import { avatarColumnProps } from "./AvatarCell";
import ActionsCell from "./ActionsCell";
import HighlightCell from "./HighlightCell";
import GridFilters from "./GridFilters";

class App extends React.Component {
  state = {
    data: initialData,
    editing: null
  };

  editableComponent = ({ input, editing, value, ...rest }) => {
    const Component = editing ? BS.FormControl : BS.FormControl.Static;
    const children =
      (!editing && <HighlightCell value={value} {...rest} />) || undefined;
    return <Component {...input} {...rest} children={children} />;
  };

  editableColumnProps = {
    ...GridFilters,
    Cell: props => {
      const editing = this.state.editing === props.original;
      const fieldProps = {
        component: this.editableComponent,
        editing,
        props
      };

      return <Field name={props.column.id} {...fieldProps} />;
    }
  };

  deleteRow = id => {
    console.log("id", id);
  };

  getActionProps = (gridState, rowProps) =>
    (rowProps && {
      mode: this.state.editing === rowProps.original ? "edit" : "view",
      actions: {
        onEdit: () => this.setState({ editing: rowProps.original }),
        onCancel: () => this.setState({ editing: null })
      }
    }) ||
    {};

  columns = [
    {
      Header: "PIC",
      accessor: "avatar",
      style: { textAlign: "center", backgroundColor: "skyblue" },
      width: 150,
      minWidth: 150,
      maxWidth: 150,
      ...avatarColumnProps
    },
    {
      Header: "Name",
      accessor: "name",
      style: { textAlign: "center", backgroundColor: "skyblue" },
      width: 150,
      minWidth: 150,
      maxWidth: 150,
      ...this.editableColumnProps
    },
    {
      Header: "Email",
      accessor: "email",
      style: { textAlign: "center", backgroundColor: "skyblue" },
      width: 350,
      minWidth: 350,
      maxWidth: 350,
      ...this.editableColumnProps
    },
    {
      Header: "Phone",
      accessor: "phone",
      style: { textAlign: "center", backgroundColor: "skyblue" },
      width: 350,
      minWidth: 350,
      maxWidth: 350,
      ...this.editableColumnProps
    },
    {
      Header: "Edit",
      maxWidth: 190,
      style: { textAlign: "center", backgroundColor: "skyblue" },
      filterable: false,
      getProps: this.getActionProps,
      Cell: ActionsCell
    },
    {
      Header: "Actions",
      Cell: props => {
        return (
          <a
            style={{
              backgroundColor: "red",
              color: "white",
              cursor: "pointer"
            }}
            onClick={() => {
              console.log("props", props);
              this.deleteRow(props.original.id);
            }}
          >
            Delete
          </a>
        );
      },
      style: { textAlign: "center", backgroundColor: "skyblue" },
      width: 100,
      minWidth: 100,
      maxWidth: 100,
      sortable: false,
      filterable: false
    }
  ];

  handleSubmit = values => {
    this.setState(state => {
      const index = this.state.data.indexOf(this.state.editing);
      console.log("index -> ", index);
      console.log("values -> ", values);
      return {
        data: set(`[${index}]`, values, state.data)
      };
    });
  };

  render() {
    return (
      <React.Fragment>
        <FormProvider
          form="inline"
          onSubmit={this.handleSubmit}
          onSubmitSuccess={() => this.setState({ editing: null })}
          initialValues={this.state.editing}
          enableReinitialize
        >
          {formProps => {
            return (
              <form onSubmit={formProps.handleSubmit}>
                <Table
                  columns={this.columns}
                  data={this.state.data}
                  defaultPageSize={6}
                />
              </form>
            );
          }}
        </FormProvider>
      </React.Fragment>
    );
  }
}
export default App;
