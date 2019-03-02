import React, { Component } from "react";
import Topbar from "./Layout/Topbar";
import AddItem from "./Components/AddItem";
import "./App.css";
import ItemList from "./Components/ItemList";

class App extends Component {
  state = {};

  buildLocalStorage = () => {
    const currentItems = JSON.parse(localStorage.getItem("items"));
    if (!currentItems) {
      localStorage.setItem("items", "[]");
    }
  };
  toLocalStorage = item => {
    const currentItems = JSON.parse(localStorage.getItem("items"));
    const newItems = [...currentItems, item];
    localStorage.setItem("items", JSON.stringify(newItems));
  };

  updateItems = () => {
    const retrievedItems = JSON.parse(localStorage.getItem("items"));
    this.setState({ items: retrievedItems });
  };

  componentWillMount() {
    this.buildLocalStorage();
    this.updateItems();
  }
  render() {
    return (
      <div className="App">
        <Topbar />
        <div className="container">
          <div className="row">
            <div className="col m2" />
            <div className="col s12 m8">
              <AddItem update={this.updateItems} store={this.toLocalStorage} />
              <ItemList items={this.state} update={this.updateItems} />
            </div>
            <div className="col m2" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
