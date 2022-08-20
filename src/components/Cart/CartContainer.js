import React, { useContext, useState } from "react";
import Cart from "./Cart";
import { CartContext } from "../../context/CartContext";
import CheckoutModal from "./Checkout/CheckoutModal";

export default function CartContainer() {
  const props = useContext(CartContext);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Cart props={props} handleShow={handleShow} />
      <CheckoutModal show={show} hide={handleClose} props={props} />
    </>
  );
}
