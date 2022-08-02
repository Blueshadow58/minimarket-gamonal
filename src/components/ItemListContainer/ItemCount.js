import React, { useEffect } from "react";
import { Plus } from "react-bootstrap-icons";
import { Dash } from "react-bootstrap-icons";
import { useState } from "react";

//Me gustaria haber pasado el producto para obtener el producto y mostrarlo en el alert
//y posteriormente en el alert de bootstrap pero no queria modificar lo solicitado
function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(parseInt(initial));

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

  useEffect(() => {
    setCount(parseInt(initial));
  }, [initial]);

  // const addToCart = () => {
  //   alert("Se han agregado " + count + " Productos");
  // };

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
            // value={count}
            onChange={(value) => this.onChange(value)}
            value={count}
          />
          <span className="input-group-btn ">
            <button
              onClick={addProduct}
              type="button"
              className="btn btn-success btn-number "
            >
              <Plus />
            </button>
          </span>
          <div className="p-3"></div>
          <button
            onClick={() => onAdd(count)}
            type="button"
            className="btn btn btn-outline-dark rounded  btn-number "
          >
            Agregar al Carro
          </button>
        </div>

        <div className=" p-3"></div>
      </div>
    </div>
  );
}

export default ItemCount;
