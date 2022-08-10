import React from "react";
import "./item.css";
import { Link } from "react-router-dom";

const Item = ({ info }) => {
  return (
    <div className="item">
      <img className="img-item" src={info.Imagen} alt={info.Modelo} />
      <p>{info.Modelo}</p>
      <p>u$s {info.Precio} (+ impuestos)</p>

      <Link
        to={`/detalle/${info.id}`}
        name=""
        id=""
        className="btn btn-primary button"
        role="button"
      >
        Mas Info
      </Link>
    </div>
  );
};

export default Item;
