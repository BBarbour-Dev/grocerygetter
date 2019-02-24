import React from "react";
import { Link } from "react";

const Topbar = () => {
  return (
    <nav className="teal darken-1 white-text">
      <div className="nav-wrapper">
        <a href="#" className="brand-logo center">
          <i className="fas fa-shopping-cart" />
          Grocery Getter
        </a>
      </div>
    </nav>
  );
};

export default Topbar;
