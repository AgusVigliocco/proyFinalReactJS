import React from "react";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "../ItemCart";
import { addDoc, getFirestore, collection } from 'firebase/firestore'
import './Cart.css';
import swal from "sweetalert";

const Cart = () => {
  const { cart, TotalPrice } = useCartContext();
  const { ClearCart } = useCartContext();


  const orden = {
    Comprador: {
      Nombre: "Agustin",
      Apellido: "Vigliocco",
      Direccion: "Calle Falsa 123",
      Telefono: "123456789",
      Email: "fakeMail@fake.com",
    },

    productos: cart.map(producto => ({ id: producto.id, modelo: producto.Modelo, precio: producto.Precio })),
    total: TotalPrice()
  }

  const handleClick = () => {

    const db = getFirestore();
    const ordenCollection = collection(db, 'ordenes')
    addDoc(ordenCollection, orden)
      .then(({ id }) => swal({
        title: "Compra finalizada!",
        text: ` Le enviaremos la factura al correo ${orden.Comprador.Email},
        Su numero de compra es: ${id}!`,

      }));


  }

  if (cart.length === 0) {
    return (
      <div className="container d-flex flex-column align-items-center">
        <img
          src="https://www.editorialparalelo28.com/images/cartEmpty.png"
          className="img-carrito-vacio rounded-top"
          alt=""
        />
        <Link to="/">
          <button type="button" className="btn btn-primary m-3">
            Volver al catalogo
          </button>
        </Link>

      </div>
    );
  }

  return (
    <div >

      <div className="card-body">
        {cart.map((product) => (
          <ItemCart key={product.Modelo} item={product} />
        ))}
      </div>

      <div className="m-5 bg-danger fs-3 totalPrice">
        <p> Total: u$s {TotalPrice().toFixed(2)}</p>
      </div>
      <div className=" container buttons">
        <Link to="/">
          <button type="button" className="m-4 btn btn-primary">
            Seguir comprando
          </button>
        </Link>
        <button onClick={handleClick} type="button" className="btn btn-success">
          Finalizar compra
        </button>
        <button onClick={ClearCart} type="button" className="btn btn-danger m-4">
          Vaciar carrito
        </button>
      </div>
    </div>

  );
};

export default Cart;
