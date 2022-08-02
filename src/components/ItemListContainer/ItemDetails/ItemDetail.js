import Spinner from "react-bootstrap/Spinner";
import ItemCount from "../ItemCount";
import "./ItemDetail.css";
import { useNavigate } from "react-router-dom";

function ItemDetail({ product }) {
  let show = false;
  const navigate = useNavigate();
  Object.values(product) == "" ? (show = false) : (show = true);

  const handleAdd = (quantityToAdd) => {
    console.log(`Cantidad de productos a agregar: ${quantityToAdd}`);
    navigate("/cart");
  };

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
            <img className="detail-img" src={product.pictureUrl} alt="..." />
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
}

export default ItemDetail;
