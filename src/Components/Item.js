import React, { Component } from "react";

class Item extends Component {
  checkItemOff = () => {
    const makeChange = () => {
      const { id } = this.props.item;
      const currentItems = JSON.parse(localStorage.getItem("items"));
      currentItems.forEach(item => {
        if (item.id === id) {
          item.checked = !item.checked;
        }
      });
      localStorage.setItem("items", JSON.stringify(currentItems));
      this.props.update();
    };
    setTimeout(makeChange, 500);
  };
  deleteItem = () => {
    const makeChange = () => {
      const { id } = this.props.item;
      const currentItems = JSON.parse(localStorage.getItem("items"));
      if (currentItems.length === 1) {
        localStorage.setItem("items", "[]");
      } else {
        const newItems = currentItems.filter(item => item.id !== id);
        localStorage.setItem("items", JSON.stringify(newItems));
      }
      this.props.update();
    };
    setTimeout(makeChange, 500);
  };
  render() {
    const { item, price, store, checked } = this.props.item;

    const dollarSign = "$",
      dash = "-";

    const priceSection = (
      <p>
        {price && (
          <span>
            {dollarSign}
            {price}
          </span>
        )}{" "}
        {store && (
          <em>
            {" "}
            {dash} {store}
          </em>
        )}
      </p>
    );

    const groceryGet = (
      <li className="collection-item avatar">
        <i
          className="material-icons circle teal darken-1 point waves-effect waves-light"
          onClick={this.checkItemOff}
        >
          add_shopping_cart
        </i>
        <span className="title grocery-item">{item}</span>
        {priceSection}
        <span className="secondary-content">
          <i
            className="material-icons red-text point"
            onClick={this.deleteItem}
          >
            cancel
          </i>
        </span>
      </li>
    );

    const groceryCart = (
      <li className="collection-item avatar grey lighten-3">
        <i
          className="material-icons circle grey darken-2 point waves-effect waves-light"
          onClick={this.checkItemOff}
        >
          remove_shopping_cart
        </i>
        <span className="title grocery-item">
          <s>{item}</s>
        </span>
        {priceSection}
        <span className="secondary-content">
          <i
            className="material-icons red-text point"
            onClick={this.deleteItem}
          >
            cancel
          </i>
        </span>
      </li>
    );

    return (
      <React.Fragment>{checked ? groceryCart : groceryGet}</React.Fragment>
    );
  }
}

export default Item;
