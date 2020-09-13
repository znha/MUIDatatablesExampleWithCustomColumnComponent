import React, { Component } from "react";
import MUIDataTable from "mui-datatables";

const Client = (props) => (
  <>
    <a href="https://github.com/" className="btn btn-primary">
      Edit
      </a>
      &nbsp;
    <a
      href="https://github.com/"
      onClick={() => {
        props.deleteClient(props.client._id);
      }}
      className="btn btn-danger"
    >
      Delete
      </a>

  </>
);

export default class ClientsList extends Component {
  constructor(props) {
    super(props);

    this.deleteClient = this.deleteClient.bind(this);

    this.state = {
      clients: [{

      }]
    };
  }

  componentDidMount() {

    this.setState({
      clients: [{
        _id: 1,
        name: 'zinah',

      },
      {
        _id: 2,
        name: 'mona',

      }]
    });

  }

  deleteClient(id) {

  }

  // This is the map I was talking about:


  clientList(currentclient) {
    console.log('heloooooooooooooooooooooooooooo',currentclient);
      return (
        <Client
          client={currentclient}
          deleteClient={this.deleteClient}
          key={1}
        />
      );
  
  }

  render() {
    const columns = [
      {
        name: "name",
        label: "Name",
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: "_id",
        options: {
          display: false,
        }
      }, 
      {
        name: "Action",
        options: {
          customBodyRender: (value, tableMeta, updateValue) => {
            return <>{this.clientList(tableMeta.rowData)}</>;
          },
        },
      },
    ];
    const { clients } = this.state;

    return (
      <>
        
        <div style={{ margin: "10px 15px", overflowX: "auto" }}>
          
          <MUIDataTable data={clients} columns={columns} />
        </div>
      </>
    );
  }
}

