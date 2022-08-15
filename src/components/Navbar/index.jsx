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
          <p>Tienda Apple ReactJS</p>
        </NavLink>
        <div className="d-flex">
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
        </div>
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
              className="d-inline-block align-text-top img-menu"
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
                  <div className="d-flex justify-content-between">
                    <p>Iphone</p>
                    <i className="bi bi-phone"></i>
                  </div>
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink className="nav-link" to="/categoria/MacBook">
                  <div className="d-flex justify-content-between">
                    <p>MacBook</p>
                    <i className="bi bi-laptop"></i>
                  </div>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/categoria/Watch">
                  <div className="d-flex justify-content-between">
                    <p>Watch</p>
                    <i className="bi bi-smartwatch"></i>
                  </div>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/carrito">
                  <div className="d-flex justify-content-between">
                    <p>Carrito</p>
                    <i className="bi bi-cart"></i>
                  </div>
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
