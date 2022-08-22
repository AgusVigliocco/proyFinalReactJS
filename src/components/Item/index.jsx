import "./item.css";
import { Link } from "react-router-dom";
import React from "react";

const Item = ({ info }) => {
  console.log(info);
  return (
    <div className="item">
      <img className="img-item" src={info.Imagen} alt={info.Modelo} />
      <p>{info.Modelo}</p>
      <p>u$s {info.Precio} (+ impuestos)</p>
      <p> Stock: {info.Stock}</p>

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
