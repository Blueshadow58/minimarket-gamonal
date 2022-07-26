import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";

function ItemDetail({ closeModal, product }) {
  let nose = true;

  Object.values(product) == "" ? (nose = false) : (nose = true);

  return (
    <>
      <Modal
        show={closeModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={closeModal}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {product.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="text-center">
            <Spinner hidden={nose} animation="border" role="status" size="xl">
              <span className="visually-hidden ">Loading...</span>
            </Spinner>
          </div>

          {nose && (
            <div className="container px-4 px-lg-5 my-5">
              <div className="row gx-4 gx-lg-5 align-items-center">
                <div className="col-md-6">
                  <img
                    className="card-img-top mb-5 mb-md-0"
                    //   src="https://dummyimage.com/600x700/dee2e6/6c757d.jpg"
                    src={product.pictureUrl}
                    alt="..."
                  />
                </div>
                <div className="col-md-6">
                  <div className="small mb-1">
                    Codigo de producto: {product.id}
                  </div>
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

                  <div className="d-flex">
                    <input
                      className="form-control text-center me-3"
                      id="inputQuantity"
                      type="num"
                      value="1"
                      // style="max-width: 3rem"
                    />
                    <button
                      className="btn btn-outline-dark flex-shrink-0"
                      type="button"
                    >
                      <i className="bi-cart-fill me-1"></i>
                      Añadir al carro
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn-danger" onClick={() => closeModal(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ItemDetail;
