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
              <h4 className="center-align">List</h4>
            </li>
            {items &&
              items.map(item => (
                <Item key={item.id} item={item} update={this.props.update} />
              ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default ItemList;
