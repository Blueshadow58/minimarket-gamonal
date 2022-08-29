import React, { useContext } from "react";
import { Plus } from "react-bootstrap-icons";
import { Dash } from "react-bootstrap-icons";
import { TrashFill } from "react-bootstrap-icons";
import { Col } from "react-bootstrap";
import { CartContext } from "../../context/CartContext";
function CartItem({ product }) {
  const {
    decreaseCantProduct,
    increaseCantProduct,
    removeToCart,
    inputChangeCant,
  } = useContext(CartContext);

  return (
    <div>
      <div className="row mb-4 d-flex justify-content-between align-items-center">
        <div className="col-md-2 col-lg-2 col-xl-2">
          <img
            src={product.pictureUrl}
            className="img-fluid rounded-3"
            alt="Cotton T-shirt"
          />
        </div>
        <div className="col-md-3 col-lg-3 col-xl-3">
          <div className="row">
            <span className="text-muted h6 text-capitalize">
              {product.category}
            </span>
          </div>
          <div className="row">
            <span className="text-black mb-0 h6">{product.description}</span>
          </div>
        </div>
        <Col md={3} lg={3} xl={2} className="d-flex">
          <button
            onClick={() => decreaseCantProduct(product.id)}
            className="btn btn-danger  px-1"
          >
            <Dash />
          </button>

          <input
            id="form1"
            min="0"
            name="quantity"
            value={product.quantity}
            type="text"
            className="form-control form-control-sm input-number text-center "
            onChange={(event) => inputChangeCant(event, product.id)}
          />

          <button
            onClick={() => increaseCantProduct(product.id)}
            className="btn  btn-success px-1"
          >
            <Plus />
          </button>
        </Col>

        <Col md={2} lg={2} xl={2}>
          <span className="mb-0 h5">$ {product.price}</span>
        </Col>

        <Col md={2} lg={2} xl={2}>
          <button
            onClick={() => removeToCart(product.id)}
            className="btn btn-danger"
          >
            <TrashFill size={25} className="" />
          </button>
        </Col>
      </div>
      <hr className="my-4" />
    </div>
  );
}

export default CartItem;
