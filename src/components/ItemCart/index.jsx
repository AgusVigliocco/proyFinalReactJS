import React from "react";
import "./ItemCart.css";
import { useCartContext } from "../../context/CartContext";

const ItemCart = ({ item }) => {
  const { RemoveProduct } = useCartContext();
  const impuestos = (item.Precio * item.quantity) * 0.21;
  return (
    <div className="card m-4">
      <div className="d-flex justify-content-between align-items-start">
        <img className="img-carrito" src={item.Imagen} alt={item.Modelo} />
        <button
          onClick={() => RemoveProduct(item.id)}
          type="button"
          className="btn btn-danger"
        >
          X
        </button>
      </div>
      <div className="">
        <div className="">
          <p>
            Modelo: <strong>{item.Modelo}</strong>
          </p>
          <p>
            Cantidad: <strong>{item.quantity}</strong>
          </p>
        </div>
        <p>
          Precio por unidad: <strong>${item.Precio}</strong>
        </p>
        <p>
          Subtotal: <strong>${(item.Precio * item.quantity).toFixed(2)}</strong>{" "}
        </p>
        <p>
          Impuestos: <strong>${impuestos.toFixed(2)}</strong>{" "}
        </p>
        <p>
          Precio total:{" "}
          <strong>
            ${((item.Precio * item.quantity) + impuestos).toFixed(2)}
          </strong>
        </p>
        <div></div>
      </div>
    </div>
  );
};

export default ItemCart;
