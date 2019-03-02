import React, { Component } from "react";
import TextInput from "../Layout/TextInput";
import uuid from "uuid";

class AddItem extends Component {
  state = {
    item: "",
    price: "",
    store: "",
    error: ""
  };

  onSubmit = e => {
    e.preventDefault();
    const { item, price, store } = this.state;
    if (item === "") {
      this.setState({ error: "Item is required." });
      return;
    }

    let dollarReg = /^\d+(?:\.\d{0,2})$/;

    if (price !== "" && !dollarReg.test(price)) {
      this.setState({ error: "Enter dollar amount." });
      return;
    }

    const newItem = {
      id: uuid(),
      item,
      price,
      store,
      checked: false
    };

    this.props.store(newItem);

    this.setState({
      item: "",
      price: "",
      store: "",
      error: ""
    });

    this.props.update();
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { item, price, store, error } = this.state;
    return (
      <div className="card">
        <div className="card-panel">
          <div className="container">
            <div className="row">
              <h4 className="mb">Add Item</h4>
              <form onSubmit={this.onSubmit.bind(this)}>
                <TextInput
                  label="Item"
                  name="item"
                  type="text"
                  value={item}
                  onChange={this.onChange}
                />
                <TextInput
                  label="$ Price"
                  name="price"
                  type="text"
                  value={price}
                  onChange={this.onChange}
                />
                <TextInput
                  label="Store"
                  name="store"
                  type="text"
                  value={store}
                  onChange={this.onChange}
                />
                {error && <p className="red-text">{error}</p>}
                <button
                  className="right btn waves-effect waves-light teal darken-1"
                  type="submit"
                  value="Add Item"
                >
                  <i className="material-icons">playlist_add</i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddItem;
