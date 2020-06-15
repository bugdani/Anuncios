import React from "react";
import "./Sidebar.scss";
import { ReactComponent as Search } from "../../assets/img/buscar.svg";
import { Accordion, Card, Form, Col } from "react-bootstrap";

export default function Sidebar() {
  return (
    <>
      <Card className="sidebar p-2" style={{ maxWidth: 300, maxHeight: 450 }}>
        <Card.Body className="sidebar__body text-left">
          <Card.Text className="sidebar__body-title">Filtrado actual</Card.Text>
          <hr />
          <Accordion defaultActiveKey="0" className="sidebar__body__search">
            <Card className="border-0">
              <Accordion.Toggle
                as={Card.Text}
                eventKey="0"
                className="sidebar__body__search__title"
              >
                Direccion
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <div className="form-row">
                  <div className="col">
                    <input
                      className="form-control sidebar__body__search__input"
                      type="text"
                      placeholder="Buscar por direccion"
                    />
                    <button
                      type="submit"
                      className="btn btn-light sidebar__body__search__button"
                    >
                      <Search className="sidebar__body__search__button-icon" />
                    </button>
                  </div>
                </div>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          <hr />
          <Accordion defaultActiveKey="0" className="">
            <Card className="border-0">
              <Accordion.Toggle
                as={Card.Text}
                eventKey="0"
                className="sidebar__body__type-operation__title"
              >
                Tipo de operacion
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Col sm={10}>
                  <Form.Check
                    type="radio"
                    label="Comprar"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                  />
                  <Form.Check
                    type="radio"
                    label="Alquilar"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios2"
                  />
                  <Form.Check
                    type="radio"
                    label="Temporal"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios3"
                  />
                  <Form.Check
                    type="radio"
                    label="Todos"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios3"
                  />
                </Col>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Card.Body>
      </Card>
    </>
  );
}
