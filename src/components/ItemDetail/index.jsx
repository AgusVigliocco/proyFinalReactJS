import React, { useState } from "react";
import ItemCount from "../../components/ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ data }) => {
  const [irCarrito, setIrCarrito] = useState(false);

  const onAdd = (quantity) => {
    setIrCarrito(true);
  };

  return (
    <div className="card p-5">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={data.Imagen} className="img-detalle" alt={data.Modelo} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h2 className="card-title">{data.Modelo}</h2>
            <h5 className="card-title">
              <strong>u$s {data.Precio}</strong>
            </h5>
            <p className="card-text">{data.Descripcion}</p>

            <p className="card-text">
              <small className="text-muted">Stock: {data.Stock}</small>
            </p>
            {irCarrito ? (
              <Link
                to="/carrito"
                className="btn btn-success button"
                role="button"
              >
                Terminar Compra
              </Link>
            ) : (
              <ItemCount initial={1} stock={5} onAdd={onAdd} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;