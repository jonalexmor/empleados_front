import React from "react";
import { Container, Row } from "react-bootstrap";
import { request } from "../helper/helper";
import paginationFactory, {
  PaginationProvider,
  PaginationListStandalone,
  SizePerPageDropdownStandalone,
} from "react-bootstrap-table2-paginator";
import "./empleados.css";
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';


import BootstrapTable from "react-bootstrap-table-next";

const { SearchBar } = Search;
const products = [
  {
    id: 1,
    name: "novio1",
    price: 1000,
  },
  {
    id: 2,
    name: "novio2",
    price: 3000,
  },
  {
    id: 3,
    name: "novio3",
    price: 4000,
  },
  {
    id: 4,
    name: "novio4",
    price: 6000,
  },
  {
    id: 5,
    name: "novio5",
    price: 10000,
  },
  {
    id: 6,
    name: "novio6",
    price: 100000,
  },
  {
    id: 7,
    name: "novio",
    price: 1000,
  },
  {
    id: 8,
    name: "novio8",
    price: 111000,
  },
  {
    id: 9,
    name: "novio9",
    price: 100000,
  },
  {
    id: 10,
    name: "novio10",
    price: 10000000,
  },
  {
    id: 11,
    name: "novio11",
    price: 20000,
  },
];
const columns = [
  {
    dataField: "id",
    text: "Product ID",
  },
  {
    dataField: "name",
    text: "Product Name",
  },
  {
    dataField: "price",
    text: "Product Price",
  },
];

export default class EmpleadosBuscar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    request
      .get("/empleados")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    const options = {
      custom: true,
      totalSize: products.length,
    };
    return (
      <Container id="empleado-buscar-container">
        <Row>
          <h1>Buscar Empleados</h1>
        </Row>
        <Row>
          <ToolkitProvider
            keyField="id"
            data={products}
            columns={columns}
            search
          >
            {(props) => (
              <div>
                <h3>Input something at below input field:</h3>
                <SearchBar {...props.searchProps} />
                <hr />
                <PaginationProvider pagination={paginationFactory(options)}>
                  {({ paginationProps, paginationTableProps }) => (
                    <div>
                      <SizePerPageDropdownStandalone {...paginationProps} />
                      <BootstrapTable
                        keyField="id"
                        data={products}
                        columns={columns}
                        {...paginationTableProps}
                        {...props.baseProps}
                      />
                      <PaginationListStandalone {...paginationProps} />
                    </div>
                  )}
                </PaginationProvider>
              </div>
            )}
          </ToolkitProvider>
        </Row>
      </Container>
    );
  }
}
