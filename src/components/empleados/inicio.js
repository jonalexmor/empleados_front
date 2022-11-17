import React from "react";
import { Container, Nav, Row } from "react-bootstrap";
import "./empleados.css";
import EmpleadosBuscar from "./crud/buscar";
import EmpleadosCrear from "./crud/crear";

export default class Empleados extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: "buscar",
    };
  }
  render() {
    return (
      <Container id="empleados-container">
        <Row>
          <Nav
            fill
            variant="tabs"
            defaultActiveKey="/buscar"
            onSelect={(eventKey) => this.setState({ currentTab: eventKey })}
          >
            <Nav.Item>
              <Nav.Link eventKey="buscar">Buscar</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="crear">Crear</Nav.Link>
            </Nav.Item>
          </Nav>
        </Row>
        <Row>
          {this.state.currentTab === "buscar" ? ( <EmpleadosBuscar /> ):
          (<EmpleadosCrear/>) }
        </Row>
      </Container>
    );
  }
}
