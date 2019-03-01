import React, { Component } from "react";

class Item extends Component {
  render() {
    const { item, price, store } = this.props.item;
    console.log(item);
    return (
      <li className="collection-item avatar">
        <i className="material-icons circle teal darken-1">
          check_box_outline_blank
        </i>
        <span className="title grocery-item">{item}</span>
        {(price, store) && (
          <p>
            {price} - <em>{store}</em>
          </p>
        )}
        <span className="secondary-content">
          <i className="material-icons red-text">cancel</i>
        </span>
      </li>
    );
  }
}

export default Item;
