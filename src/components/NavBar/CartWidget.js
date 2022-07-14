import React from "react";
import Nav from "react-bootstrap/Nav";
import { CartFill } from "react-bootstrap-icons";

export default function CartWidget() {
  return (
    <Nav.Link href="#Cart">
      <CartFill color="white" size={20} />
    </Nav.Link>
  );
}
