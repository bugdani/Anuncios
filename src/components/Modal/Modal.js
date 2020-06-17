import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { POSTINGS_STORAGE } from "../../utils/constants";

export default function ModalContact(props) {
  const { posting, addContacted } = props;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleFormSubmit = (event) => {
    addContacted();
    event.preventDefault();
  };

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            ¡Contactate con nosotros!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Dirección de email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresa tu email"
                name="email"
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail1">
              <Form.Label>Telefono</Form.Label>
              <Form.Control
                type="phone"
                placeholder="Ingresa tu numero de telefono"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
