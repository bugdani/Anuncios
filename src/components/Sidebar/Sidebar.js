import React from "react";
import "./Sidebar.scss";
import { ReactComponent as Search } from "../../assets/img/buscar.svg";
import { Accordion, Card, Form } from "react-bootstrap";

export default function Sidebar() {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>Filtrado actual</Card.Title>
          <hr />
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Direccion
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Buscar por direccion"
                  />
                  <button type="submit" className="btn btn-light">
                    <Search />
                  </button>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Tipo de operacion
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <div key={`custom-radio`} className="mb-3">
                    <Form.Check
                      custom
                      type={"radio"}
                      id={`custom-radio1`}
                      label={`Check this custom radio`}
                    />
                  </div>
                  <div key={`custom-radio`} className="mb-3">
                    <Form.Check
                      custom
                      type={"radio"}
                      id={`custom-radio2`}
                      label={`Check this custom radio`}
                    />
                  </div>
                  <div key={`custom-radio`} className="mb-3">
                    <Form.Check
                      custom
                      type={"radio"}
                      id={`custom-radio3`}
                      label={`Check this custom radio`}
                    />
                  </div>
                  <div key={`custom-radio`} className="mb-3">
                    <Form.Check
                      custom
                      type={"radio"}
                      id={`custom-radio4`}
                      label={`Check this custom radio`}
                    />
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Card.Body>
      </Card>
    </>
  );
}
