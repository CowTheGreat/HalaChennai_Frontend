import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/Custom/logo.png";
import cart_icon from "../Assets/Frontend_Assets/cart_icon.png";

export const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        {/* <p>SHOPPER</p> */}
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("home");
          }}
        >
          Home {menu === "home" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("tshirt");
          }}
        >
          T-Shirts {menu === "tshirt" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("contact");
          }}
        >
          Contact {menu === "contact" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt="" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};
