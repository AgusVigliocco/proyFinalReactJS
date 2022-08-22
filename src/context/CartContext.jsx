import React, { useState, useContext } from "react";
import swal from "sweetalert";

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const TotalPrice = () => {

    return cart.reduce((prev, producto) => prev + ((producto.Precio * producto.quantity) + ((producto.Precio * producto.quantity) * 0.21)), 0);
  }

  const TotalProducts = () =>
    cart.reduce(
      (acumulador, productoActual) => acumulador + productoActual.quantity,
      0
    );

  const [cart, setCart] = useState([]);

  const ClearCart = () =>
    swal({
      title: "Esta seguro?",
      text: "Una vez vaciado el carrito, deberá llenarlo nuevamente!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          setCart([]);
          swal("Listo! El carrito se vacio correctamente!", {
            icon: "success",
          });
        } else {
          swal("Mantenemos los productos cargados en el carrito!");
        }
      });


  const IsInCart = (id) =>
    cart.find((product) => product.id === id) ? true : false;

  const RemoveProduct = (id) =>
    swal({
      title: "Esta seguro?",
      text: "Una vez eliminado el producto, deberá realizar la compra nuevamente",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          setCart(cart.filter((product) => product.id !== id));
          swal("El producto fue eliminado del carrito", {
            icon: "success",
          });
        } else {
          swal("El producto se mantiene a salvo!");
        }
      });

  const AddProduct = (item, quantity) => {
    if (IsInCart(item.id)) {
      setCart(
        cart.map((product) => {
          return product.id === item.id
            ? { ...product, quantity: product.quantity + quantity }
            : product;
        })
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  return (
    <CartContext.Provider
      value={{
        ClearCart,
        IsInCart,
        RemoveProduct,
        AddProduct,
        TotalPrice,
        TotalProducts,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
