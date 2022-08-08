import React, { useContext } from "react";
import Nav from "react-bootstrap/Nav";
import { CartFill } from "react-bootstrap-icons";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const valueToShare = useContext(CartContext); //Consumir del context

  return (
    <Nav.Link as={Link} to="/cart">
      {/* <CartFill color="white" size={20} /> */}
      {/* {cantInCart} */}
      <button className="btn btn-outline-light" type="button">
        <CartFill className="me-1 pb-1" color="white" size={20} />
        Cart
        <span className="badge bg-danger text-white ms-1 rounded-pill">
          {valueToShare.cantInCart}
        </span>
      </button>
    </Nav.Link>
  );
};

export default CartWidget;
