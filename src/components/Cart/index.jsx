import React from "react";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "../ItemCart";

const Cart = () => {
  const { cart, TotalPrice } = useCartContext();

  if (cart.length === 0) {
    return (
      <div className="container d-flex flex-column align-items-center">
        <p className="h3">Carrito vacio</p>
        <Link to="/">
          <button type="button" className="btn btn-primary m-3">
            Volver al catalogo
          </button>
        </Link>
        <img
          src="https://www.editorialparalelo28.com/images/cartEmpty.png"
          className="img-carrito-vacio rounded-top"
          alt=""
        />
      </div>
    );
  }

  return (
    <div className=" align-items-center ">
      <div>
        <div className="m-5 bg-danger fs-3">
          Total: ${TotalPrice().toFixed(2)}
        </div>
        <Link to="/">
          <button type="button" className="m-4 btn btn-primary">
            Seguir comprando
          </button>
        </Link>
        <button type="button" className="btn btn-success">
          Finalizar compra
        </button>
      </div>
      <div className="card-body d-flex">
        {cart.map((product) => (
          <ItemCart key={product.Modelo} item={product} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
