import React from "react";
import "./cartWidget.css";
import { useCartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { TotalProducts } = useCartContext();

  return (

    <div className="mx-3 d-flex">
      <i className="bi bi-cart3 " ></i>
      <span className="item-number">{TotalProducts() || ""}</span>
    </div>


  );
};

export default CartWidget;
