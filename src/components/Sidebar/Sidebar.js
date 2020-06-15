import React from "react";
import "./Sidebar.scss";
import { ReactComponent as Search } from "../../assets/img/buscar.svg";
import { Accordion, Card, Form } from "react-bootstrap";

export default function Sidebar() {
  return (
    <>
      <Card className="sidebar .float-right" style={{ maxWidth: 300 }}>
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
                <Card.Body>
                  <div className="form-row">
                    <div className="col">
                      <input
                        className="form-control sidebar__body__search__input"
                        type="text"
                        placeholder="Buscar por direccion"
                      />
                    </div>
                    <div className="col">
                      <button
                        type="submit"
                        className="btn btn-light sidebar__body__search__button"
                      >
                        <Search className="sidebar__body__search__button-icon" />
                      </button>
                    </div>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          <Accordion defaultActiveKey="0" className="">
            <Card className="border-0">
              <Accordion.Toggle as={Card.Text} eventKey="0">
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
