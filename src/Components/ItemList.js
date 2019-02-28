import React, { Component } from "react";
import Item from "./Item";

class ItemList extends Component {
  state = {};

  componentWillMount() {
    const retrievedItems = JSON.parse(localStorage.getItem("items"));
    this.setState({ items: retrievedItems });
  }
  render() {
    const { items } = this.state;
    return (
      <div className="card">
        <div className="card-panel">
          <ul className="collection with-header">
            <li className="collection-header">
              <h4>List</h4>
            </li>
            {items && items.map(item => <Item key={item.id} item={item} />)}
          </ul>
        </div>
      </div>
    );
  }
}

export default ItemList;
