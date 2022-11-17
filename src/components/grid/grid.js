import React from "react";
import { Row, Col } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationProvider,
  PaginationListStandalone,
  SizePerPageDropdownStandalone,
} from "react-bootstrap-table2-paginator";
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";

import { request } from "../helper/helper";
import Loading from "../loading/loading";

const { SearchBar } = Search;

export default class DataGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Loading: false,
      rows: [],
    };
  }
  componentDidMount() {
    this.getData();
  }
  getData() {
    this.setState({ loading: false});
    request
      .get(this.props.url)
      .then((response) => {
        this.setState({ rows: response.data,
        Loading: false });
      })
      .catch((error) => {
        this.setState({ loading: false});
        console.log(error);
      });
  }

  render() {
    const options = {
      custom: true,
      totalSize: this.state.rows.length,
    };
    return (
      <>
      <Loading show={this.state.loading}/>
      <ToolkitProvider
        keyField="tp"
        data={this.state.rows}
        columns={this.props.columns}
        search
      >
        {(props) => (
          <div>
            <hr />
            <PaginationProvider pagination={paginationFactory(options)}>
              {({ paginationProps, paginationTableProps }) => (
                <div>
                  <Row>
                    <Col>
                      <SizePerPageDropdownStandalone {...paginationProps} />
                    </Col>
                    <Col>
                      <SearchBar {...props.searchProps} />
                    </Col>
                  </Row>
                  <BootstrapTable
                    keyField="bt"
                    data={this.state.rows}
                    columns={this.props.columns}
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
      </>
    );
  }
}
