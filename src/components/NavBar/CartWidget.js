import React, { useContext } from "react";
import Nav from "react-bootstrap/Nav";
import { CartFill } from "react-bootstrap-icons";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cantInCart } = useContext(CartContext);

  return (
    <>
      {cantInCart === 0 ? (
        <> </>
      ) : (
        <Nav.Link as={Link} to="/cart">
          <button className="btn btn-outline-light" type="button">
            <CartFill className="me-1 pb-1" color="white" size={20} />
            Cart
            <span className="badge bg-danger text-white ms-1 rounded-pill">
              {cantInCart}
            </span>
          </button>
        </Nav.Link>
      )}
    </>
  );
};

export default CartWidget;
