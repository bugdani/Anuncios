import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function ModalInformation(props) {
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
            Te contactaremos pronto
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            No es necesario que nos vuelvas a escribir, ya tenemos tu contacto,
            en breve te estaremos contactando. Muchas gracias!
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Entendido</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
