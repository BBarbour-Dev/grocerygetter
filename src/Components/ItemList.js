import React, { Component } from "react";
import Item from "./Item";

class ItemList extends Component {
  render() {
    const { items } = this.props.items;
    return (
      <div className="card">
        <div className="card-panel">
          <ul className="collection with-header">
            <li className="collection-header">
              <h4>List</h4>
              {items && items.map(item => <Item key={item.id} item={item} />)}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ItemList;
