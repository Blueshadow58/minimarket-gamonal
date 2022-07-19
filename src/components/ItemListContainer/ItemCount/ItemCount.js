import React from "react";
import { Plus } from "react-bootstrap-icons";
import { Dash } from "react-bootstrap-icons";
import { useState } from "react";

function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  const deleteProduct = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const addProduct = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const addToCart = () => {
    alert("Se han agregado " + count + " Productos");
  };

  return (
    <div className="center">
      <div className="">
        <div className="input-group">
          <span className="input-group-btn">
            <button
              onClick={deleteProduct}
              type="button"
              className="btn btn-danger btn-number"
            >
              <Dash />
            </button>
          </span>
          <input
            type="text"
            className="form-control input-number text-center"
            value={count}
          />
          <span className="input-group-btn">
            <button
              onClick={addProduct}
              type="button"
              className="btn btn-success btn-number"
            >
              <Plus />
            </button>
          </span>
        </div>

        <div className=" pt-3">
          <button
            onClick={addToCart}
            type="button"
            className="btn btn-success btn-number "
          >
            Agregar al Carro
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemCount;
