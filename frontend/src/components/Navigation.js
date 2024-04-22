import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <NavLink to="/">
          <img src="../images/logo.png" alt="Logo" />
        </NavLink>
      </div>
      <div className="links">
        <ul>
          <NavLink to="/signup">
            <li className="hover-underline-animation">Sign Up</li>
          </NavLink>
          <NavLink to="/login">
            <li className="hover-underline-animation">Log In</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
