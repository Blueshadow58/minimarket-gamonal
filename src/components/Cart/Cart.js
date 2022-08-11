import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

import "./Cart.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ArrowLeft } from "react-bootstrap-icons";
import { CartX as CartIcon } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { Plus } from "react-bootstrap-icons";
import { Dash } from "react-bootstrap-icons";
import { TrashFill } from "react-bootstrap-icons";
import { Col } from "react-bootstrap";

function Cart() {
  const { cart } = useContext(CartContext);
  const { cantInCart } = useContext(CartContext);
  const { totalPriceInCart } = useContext(CartContext);
  const [shipp, setShipp] = useState(0);

  const Eliminar = () => {
    console.log("funcion consolo log de eliminar");
  };

  // console.log(isInCart(1));

  // console.log(removeToCart(2));
  //console.log(data);
  return (
    // <Container classNameName="mt-5">
    //   <Table responsive classNameName="table ">
    //     <thead>
    //       <tr>
    //         <th></th>

    //         <th>Nombre</th>
    //         <th>Precio</th>
    //         <th>Categoria</th>
    //         <th>Descripcion</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {Array.from(cart).map((product, index) => (
    //         <tr>
    //           <td>
    //             <img classNameName="img-td" src={product.pictureUrl} alt="..." />
    //           </td>

    //           <td> {product.title}</td>
    //           <td> {product.price}</td>
    //           <td> {product.category}</td>
    //           <td> {product.description}</td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </Table>
    // </Container>

    <section className="h-100 h-custom">
      <div className="container py-5 ">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12">
            <div
              className="card card-registration card-registration-2"
              style={{ borderRadius: "15px" }}
            >
              <div className="card-body p-0">
                <div className="row g-0">
                  <div className="col-lg-8">
                    <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <Link
                          as={Link}
                          to="/"
                          style={{ textDecoration: "none", color: "#212529" }}
                        >
                          <span className="mb-0 h5 ">
                            <ArrowLeft className="ml-5" size={22} />
                            <> </>Seguir comprando
                          </span>
                        </Link>
                        <span className="mb-0 text-muted h5 text-end">
                          {cantInCart} Productos en el carrito
                        </span>
                      </div>
                      <hr className="my-4" />

                      {cantInCart === 0 ? (
                        <div className="text-center ">
                          <span className="h5 ">
                            El carrito se encuentra Vacio
                          </span>
                          <> </>
                          <CartIcon size={35} className="" />
                        </div>
                      ) : (
                        Array.from(cart).map((product, index) => (
                          <div key={product.id}>
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
                                  <span className="text-muted h6">
                                    {product.category}
                                  </span>
                                </div>
                                <div className="row">
                                  <span className="text-black mb-0 h6">
                                    {product.description}
                                  </span>
                                </div>
                              </div>
                              <Col md={3} lg={3} xl={2} className="d-flex">
                                <button className="btn btn-danger  px-1">
                                  <Dash />
                                </button>

                                <input
                                  id="form1"
                                  min="0"
                                  name="quantity"
                                  value={product.quantity}
                                  type="text"
                                  className="form-control form-control-sm input-number text-center "
                                  onChange={(value) => this.onChange(value)}
                                />

                                <button className="btn  btn-success px-1">
                                  <Plus />
                                </button>
                              </Col>

                              <Col md={2} lg={2} xl={2}>
                                <span className="mb-0 h5">
                                  $ {product.price}
                                </span>
                              </Col>

                              <Col md={2} lg={2} xl={2}>
                                <button
                                  onClick={Eliminar}
                                  className="btn btn-danger"
                                >
                                  <TrashFill size={25} className="" />
                                </button>
                              </Col>

                              {/* <div className="col-md-1 col-lg-1 col-xl-1 ">
                                <button
                                  onClick={Eliminar}
                                  className="btn btn-danger"
                                >
                                  <TrashFill size={25} className="" />
                                </button>
                              </div> */}
                            </div>
                            <hr className="my-4" />
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                  <div className="col-lg-4 bg-grey">
                    <div className="p-5">
                      <span className="fw-bold mb-5 mt-2 pt-1 h4">Total</span>
                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-4">
                        <span className="text-uppercase h6">
                          {cantInCart} Producto(s)
                        </span>

                        <span className="h5">{totalPriceInCart}</span>
                      </div>

                      <span className="text-uppercase  h6">Envio</span>

                      <Form.Select
                        className="text-black mt-3"
                        aria-label=""
                        size=""
                        value={shipp}
                        onChange={(e) => setShipp(parseInt(e.target.value))}
                      >
                        <option value={0} className="">
                          Retiro en local $0
                        </option>
                        <option value={2000} className="">
                          Envio a domicilio $2.000
                        </option>
                      </Form.Select>

                      <hr className="my-4" />

                      <div className="d-flex justify-content-between ">
                        <span className="text-uppercase h6">
                          Total Productos
                        </span>
                        <span className="h5">$ {totalPriceInCart}</span>
                      </div>
                      <div className="d-flex justify-content-between mb-3">
                        <span className="text-uppercase h6">Envio</span>
                        <span className="h5">$ {shipp}</span>
                      </div>

                      <div className="d-flex justify-content-between mb-5">
                        <span className="text-uppercase h6">Precio total</span>
                        <span className="h5">$ {totalPriceInCart + shipp}</span>
                      </div>

                      <div className="d-grid gap-2">
                        <Button variant="dark" size="md">
                          Comprar
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
