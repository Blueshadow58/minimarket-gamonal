import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

import "./Cart.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ArrowLeft } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

function Cart() {
  const { cart } = useContext(CartContext);
  const { cantInCart } = useContext(CartContext);

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
                        <span className="fw-bold mb-0 text-black h4">
                          Carrito
                        </span>
                        <span className="mb-0 text-muted h5">
                          {cantInCart} Productos
                        </span>
                      </div>
                      <hr className="my-4" />

                      {Array.from(cart).map((product, index) => (
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
                            <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                              <button className="btn btn-link px-2">
                                <i className="fas fa-minus"></i>
                              </button>

                              <input
                                id="form1"
                                min="0"
                                name="quantity"
                                defaultValue={product.quantity}
                                type="number"
                                className="form-control form-control-sm"
                              />

                              <button className="btn btn-link px-2">
                                <i className="fas fa-plus"></i>
                              </button>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                              <span className="mb-0 h6">$ {product.price}</span>
                            </div>
                            <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                              <a href="#!" className="text-muted">
                                <i className="fas fa-times"></i>
                              </a>
                            </div>
                          </div>
                          <hr className="my-4" />
                        </div>
                      ))}

                      <div className="pt-3">
                        <Link
                          as={Link}
                          to="/"
                          style={{ textDecoration: "none", color: "#212529" }}
                        >
                          <span className="mb-0 h5">
                            <ArrowLeft className="ml-5" size={22} />
                            <> </>Seguir comprando
                          </span>
                        </Link>
                      </div>
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
                        <span className="h5">$ </span>
                      </div>

                      <span className="text-uppercase  h6">Envio</span>

                      <Form.Select
                        className="text-black mt-3"
                        aria-label=""
                        size=""
                      >
                        <option className="">Envio a domicilio $2.000</option>
                        <option className="">Retiro en local $0</option>
                      </Form.Select>

                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-5">
                        <span className="text-uppercase h6">Precio total</span>
                        <span className="h5">$ </span>
                      </div>

                      <div className="d-grid gap-2">
                        <Button variant="dark" size="md">
                          Pagar
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
