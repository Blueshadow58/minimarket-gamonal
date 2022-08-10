import Spinner from "react-bootstrap/Spinner";
import ItemCount from "../ItemCount";
import "./ItemDetail.css";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../context/CartContext";

const ItemDetail = ({ product }) => {
  const [count, setCount] = useState(0);
  const { addToCart } = useContext(CartContext);
  const { cart } = useContext(CartContext);

  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  //let show = false;

  const handleAdd = (quantityToAdd) => {
    // console.log(`Cantidad de productos a agregar: ${quantityToAdd}`);
    setCount(quantityToAdd);

    addToCart(product, quantityToAdd);
    navigate("/cart");
  };

  useEffect(() => {
    // addToCart(product, count);
    // console.log(product);
    !Array.isArray(product) ? setShow(true) : setShow(false);
    // console.log(product);
  }, [cart, product, count]);

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
            <div className="small mb-1">Codigo de producto: {product.id}</div>
            <h1 className="display-5 fw-bolder">{product.title}</h1>
            <div className="fs-5 mb-5">
              <span className="text-decoration-line-through">
                {/* ${Math.round(product.price * 1.1)} */}
              </span>
              <span>
                <> </>${product.price}
              </span>
            </div>
            <p className="lead">{product.description}</p>
            <p className="lead">Stock: {product.stock}</p>
            <div className="d-flex">
              <ItemCount stock={product.stock} initial={1} onAdd={handleAdd} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
