import React from "react";
import "./Navbar.css";
import CartWidget from "../CartWidget";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img
            src="https://iconape.com/wp-content/png_logo_vector/apple-icon-logo.png"
            alt=""
            width="20%"
            height="auto"
            className="d-inline-block align-text-top"
          />
        </NavLink>
        <div>
          <NavLink className="cart-link" to="/carrito">
            <CartWidget />
          </NavLink>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end text-bg-dark"
          tabIndex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className="offcanvas-header">
            <img
              src="https://iconape.com/wp-content/png_logo_vector/apple-icon-logo.png"
              alt=""
              width="40%"
              height="auto"
              className="d-inline-block align-text-top"
            />

            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-center flex-grow-1 pe-3 fs-4 link-navbar">
              <li className="nav-item">
                <NavLink className="nav-link" to="/categoria/Iphone">
                  <p>Iphone</p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/categoria/MacBook">
                  <p>MacBook</p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/categoria/Watch">
                  <p>Watch</p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/carrito">
                  <p>Carrito</p>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
