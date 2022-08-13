import Spinner from "react-bootstrap/Spinner";
import ItemCount from "../ItemCount";
import "./ItemDetail.css";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../context/CartContext";

const ItemDetail = ({ product }) => {
  // const [count, setCount] = useState(0);
  const { addToCart } = useContext(CartContext);

  const { isInCart } = useContext(CartContext);
  const [show, setShow] = useState(false);
  const [redirectButton, setRedirectButton] = useState(false);

  useEffect(() => {
    if (isInCart(product.id)) {
      setRedirectButton(true);
    }
  }, [isInCart, product.id]);

  const handleAdd = (quantityToAdd) => {
    // console.log(`Cantidad de productos a agregar: ${quantityToAdd}`);
    // setCount(quantityToAdd);

    addToCart(product, quantityToAdd);
    setRedirectButton(true);
  };

  useEffect(() => {
    // addToCart(product, count);
    // console.log(product);

    !Array.isArray(product) ? setShow(true) : setShow(false);

    // console.log(product);
  }, [product]);

  return (
    <>
      <Spinner
        className="customSpinner"
        variant="dark"
        animation="border"
        role="status"
        hidden={show}
      >
        {/* <span className="visually-hidden ">Loading...</span> */}
      </Spinner>

      <div className="container px-4 px-lg-5 my-5" hidden={!show}>
        <div className="row gx-4 gx-lg-5 align-items-center">
          <div className="col-md-6 ">
            <img
              className="detail-img img-fluid"
              src={product.pictureUrl}
              alt="..."
            />
          </div>
          <div className="col-md-6">
            {/* <div className="small mb-1">Codigo de producto: {product.id}</div> */}

            <div className="pb-3">
              <span className="display-5 fw-bolder h1 pb-2">
                {product.title}
              </span>
            </div>
            <div className="fs-5 mb-3">
              {/* <span className="text-decoration-line-through">Precio</span> */}
              <span className="h4">Precio:</span>
              <span className="h4">
                <> </>${product.price}
              </span>
            </div>
            <p className="lead">{product.description}</p>
            <p className="lead">Stock: {product.stock}</p>
            <div className="d-flex">
              {redirectButton ? (
                <Link
                  as={Link}
                  to={"/cart"}
                  className="btn btn btn-outline-dark rounded  btn-number "
                >
                  Ir al carrito
                </Link>
              ) : (
                <ItemCount
                  stock={product.stock}
                  initial={1}
                  onAdd={handleAdd}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
