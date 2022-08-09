import React from "react";
import "./item.css";

const Item = ({ info }) => {
  return (
    <div className="item">
      <img className="img-item" src={info.Imagen} alt={info.Modelo} />
      <p>{info.Modelo}</p>
      <p>u$s {info.Precio} (+ impuestos)</p>

      <a
        name=""
        id=""
        className="btn btn-primary button"
        href="#url"
        role="button"
      >
        Mas Info
      </a>
    </div>
  );
};

export default Item;
