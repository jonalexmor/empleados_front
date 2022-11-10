import React from "react";
import { Container, Row } from "react-bootstrap";
import { request } from "../helper/helper";

export default class EmpleadosBuscar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <Container>
        <Row>
            <h1 style={{marginTop: 300}}>Buscar Empleados</h1>
        </Row>
    </Container>;
  }
}
