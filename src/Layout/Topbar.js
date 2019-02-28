import React from "react";

const Topbar = () => {
  return (
    <nav className="teal darken-1 white-text">
      <div className="nav-wrapper">
        <a href="/" className="brand-logo center hide-on-med-and-down">
          Grocery Getter
          <i className="large material-icons right">shopping_cart</i>
        </a>
        <a href="/" className="brand-logo center hide-on-large-only">
          GG
          <i className="material-icons right">shopping_cart</i>
        </a>
      </div>
    </nav>
  );
};

export default Topbar;
