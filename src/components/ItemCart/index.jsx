import React from "react";
import "./ItemCart.css";
import { useCartContext } from "../../context/CartContext";

const ItemCart = ({ item }) => {
  const { RemoveProduct } = useCartContext();
  const impuestos = (item.Precio * item.quantity) * 0.21;
  return (
    <div className="card tarjeta m-4">
      <img className="img-carrito" src={item.Imagen} alt={item.Modelo} />
      <div className="d-flex">
        <p className="mx-4">
          Modelo: <strong>{item.Modelo}</strong>
        </p>
        <p className="mx-4">
          Cantidad: <strong>{item.quantity}</strong>
        </p>
        <p className="mx-4">
          Precio por unidad: <strong>${item.Precio}</strong>
        </p>
        <p className="mx-4">
          Subtotal: <strong>${(item.Precio * item.quantity).toFixed(2)}</strong>{" "}
        </p>
        <p className="mx-4">
          Impuestos: <strong>${impuestos.toFixed(2)}</strong>{" "}
        </p>
        <p className="mx-4">
          Precio total:{" "}
          <strong>
            ${((item.Precio * item.quantity) + impuestos).toFixed(2)}
          </strong>
        </p>
        <button
          onClick={() => RemoveProduct(item.id)}
          type="button"
          className="btn btn-danger"
        >
          <span><i className="bi bi-trash-fill"></i></span>
        </button>
      </div>
    </div>
  );
};

export default ItemCart;
