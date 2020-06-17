import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { POSTINGS_STORAGE } from "../../utils/constants";

export default function ModalContact(props) {
  const { posting } = props;

  const handleFormSubmit = (e) => {
    const configPosting = {};
    configPosting.posting_id = posting.posting_id;
    configPosting.contacted = true;
    if (configPosting.favorite === undefined) {
      configPosting.favorite = false;
    }
    //const allPostingArray.push(configPosting);
    localStorage.setItem(POSTINGS_STORAGE, JSON.stringify(configPosting));
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
                id="email"
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Telefono</Form.Label>
              <Form.Control
                type="phone"
                placeholder="Ingresa tu numero de telefono"
                id="telefono"
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
