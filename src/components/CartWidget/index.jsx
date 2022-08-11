import React from "react";
import "./cartWidget.css";
import { useCartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { TotalProducts } = useCartContext();

  return (
    <div>
      <i className="bi bi-cart3"></i>
      <span>{TotalProducts() || ""}</span>
    </div>
  );
};

export default CartWidget;
