import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import Cart from "./components/Cart";
import CartProvider from "./context/CartContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/categoria/:categoriaId"
              element={<ItemListContainer />}
            />
            <Route path="/carrito" element={<Cart />} />
            <Route
              path="/detalle/:detalleId"
              element={<ItemDetailContainer />}
            />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
