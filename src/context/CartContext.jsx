import React, { useState, useContext } from "react";
const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const TotalPrice = () => {
    return cart.reduce(
      (acumulador, act) => acumulador + act.quantity * act.Precio,
      0
    );
  };

  const TotalProducts = () =>
    cart.reduce(
      (acumulador, productoActual) => acumulador + productoActual.quantity,
      0
    );

  const [cart, setCart] = useState([]);

  const ClearCart = () => setCart([]);

  const IsInCart = (id) =>
    cart.find((product) => product.id === id) ? true : false;

  const RemoveProduct = (id) =>
    setCart(cart.filter((product) => product.id !== id));

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
