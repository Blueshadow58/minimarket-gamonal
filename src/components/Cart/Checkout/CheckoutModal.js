import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import CheckoutTable from "./CheckoutTable";
import { SendOrder } from "./SendOrder";
import ResponseOrder from "./ResponseOrder";
import { Spinner } from "react-bootstrap";

function CheckoutModal({ show, hide, props }) {
  const { cantInCart, cleanCart } = props;
  const [emailAlert, setEmailAlert] = useState(false);
  const [orderKey, setOrderKey] = useState(false);
  const [userData, setUserData] = useState(false);
  const [sendOrder, setSendOrder] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, email, reEmail } = e.target.elements;
    setUserData({
      name: name.value,
      phone: phone.value,
      email: email.value,
    });

    if (email.value !== reEmail.value) {
      setEmailAlert(true);
    } else {
      setSendOrder(true);
    }
  };

  useEffect(() => {
    if (sendOrder) {
      SendOrder(userData, props).then((id) => {
        setOrderKey(id);
      });
      setUserData(false);
      cleanCart();
      setSendOrder(false);
    }
  }, [cleanCart, props, sendOrder, userData]);

  return (
    <>
      <Modal show={show} onHide={hide}>
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Detalle de compra </Modal.Title>
          </Modal.Header>

          <Modal.Body hidden={!orderKey}>
            {!orderKey ? (
              <Spinner
                className="text center"
                variant="dark"
                animation="border"
                role="status"
              ></Spinner>
            ) : (
              <ResponseOrder orderKey={orderKey} userData={userData} />
            )}
          </Modal.Body>

          <Modal.Body hidden={orderKey}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Ingrese su nombre </Form.Label>
              <Form.Control
                name="name"
                type="text"
                placeholder="Nombre"
                required
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Numero telefonico</Form.Label>

              <Form.Control
                name="phone"
                type="text"
                placeholder="Telefono"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Correo electronico</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Correo"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Reingrese su correo electronico</Form.Label>
              <Form.Control
                name="reEmail"
                type="email"
                placeholder="Reingrese su correo"
                required
                isInvalid={emailAlert}
              />
              <Form.Control.Feedback type="invalid">
                Verifique que los emails ingresados con iguales
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Cantidad de productos ({cantInCart})</Form.Label>
              {/* Tabla con el carrito */}
              <CheckoutTable props={props} />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={hide}>
              Close
            </Button>
            <Button variant="dark" type="submit" hidden={orderKey}>
              Finalizar compra
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default CheckoutModal;
