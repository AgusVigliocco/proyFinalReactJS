import React from "react";
import "./ItemCart.css";
import { useCartContext } from "../../context/CartContext";

const ItemCart = ({ item }) => {
  const { RemoveProduct } = useCartContext();
  const impuestos = (item.Precio * item.quantity * 0.21).toFixed(2);
  return (
    <div>
      <img src={item.Imagen} alt={item.Modelo} />
      <div>
        <p>Modelo: {item.Modelo}</p>
        <p>Precio: u$s {item.Precio}</p>
        <p>Cantidad: {item.quantity}</p>
        <p>Impuestos: u$s {impuestos} </p>
        <button
          className="btn btn-danger"
          onClick={() => RemoveProduct(item.id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default ItemCart;
