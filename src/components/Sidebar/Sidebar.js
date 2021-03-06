import React, { useState, useEffect } from "react";
import "./Sidebar.scss";
import { ReactComponent as Arrow } from "../../assets/img/flecha.svg";
import { Accordion, Card, Form, Col } from "react-bootstrap";

export default function Sidebar(props) {
  const { reloadList, reloadListForSearch } = props;
  const [operation, setOperation] = useState(4);
  const [querySearch, setQuerySearch] = useState("");

  useEffect(() => {
    reloadList(operation);
  }, [operation]);

  useEffect(() => {
    reloadListForSearch(querySearch);
  }, [querySearch]);

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
                <Arrow
                  className="Arrow float-right"
                  style={{ width: 20, height: 20 }}
                />
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <div className="form-row">
                  <div className="col search-form">
                    <input
                      className="form-control sidebar__body__search__input"
                      type="text"
                      placeholder="Buscar por direccion"
                      onChange={(e) => setQuerySearch(e.target.value)}
                    />
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
                <Arrow
                  className="arrow float-right"
                  style={{ width: 20, height: 20 }}
                />
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Col sm={10}>
                  <Form.Check
                    className="radio-item"
                    type="radio"
                    label="Comprar"
                    name="formHorizontalRadios"
                    id="2"
                    onChange={() => setOperation(2)}
                  />
                  <Form.Check
                    type="radio"
                    label="Alquilar"
                    name="formHorizontalRadios"
                    id="1"
                    onChange={() => setOperation(1)}
                  />
                  <Form.Check
                    type="radio"
                    label="Temporal"
                    name="formHorizontalRadios"
                    id="3"
                    onChange={() => setOperation(3)}
                  />
                  <Form.Check
                    type="radio"
                    label="Todos"
                    name="formHorizontalRadios"
                    id="4"
                    checked={4 === operation}
                    onChange={() => setOperation(4)}
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
