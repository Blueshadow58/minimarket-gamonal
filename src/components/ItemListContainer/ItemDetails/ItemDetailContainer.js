import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItem } from "../../../utils/api";

import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getItem(id).then((data) => {
      setProduct(data);
    });
  }, [id]);

  return <ItemDetail product={product} />;
}

export default ItemDetailContainer;
