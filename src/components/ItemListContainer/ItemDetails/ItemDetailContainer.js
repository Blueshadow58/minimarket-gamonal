import React, { useEffect, useState } from "react";
import { getItem } from "../../../utils/api";
import Container from "react-bootstrap/Container";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer({ productId, closeModal }) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getItem(productId).then((data) => {
      setProduct(data);
    });
  });

  return <ItemDetail closeModal={closeModal} product={product} />;
}

export default ItemDetailContainer;
