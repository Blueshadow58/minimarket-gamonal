import React, { useEffect } from "react";

import "./Cart.css";
import Button from "react-bootstrap/Button";
import { ArrowLeft } from "react-bootstrap-icons";
import { CartX as CartIcon } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

function Cart({ props, handleShow }) {
  const { cart, cantInCart, totalPriceInCart } = props;

  useEffect(() => {}, [cart, cantInCart]);

  return (
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
                          {cantInCart} Producto(s) en el carrito
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
                        Array.from(cart).map((product) => (
                          <CartItem key={product.id} product={product} />
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

                      <div className="my-4" />

                      <div className="d-flex justify-content-between ">
                        <span className="text-uppercase h6">
                          Total Productos
                        </span>
                        <span className="h5">$ {totalPriceInCart}</span>
                      </div>

                      <div className="my-4" />

                      <div className="d-grid gap-2">
                        <Button
                          variant="dark"
                          size="md"
                          onClick={handleShow}
                          disabled={!cart.length}
                        >
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
