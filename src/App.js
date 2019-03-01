import React, { Component } from "react";
import Topbar from "./Layout/Topbar";
import AddItem from "./Components/AddItem";
import "./App.css";
import ItemList from "./Components/ItemList";

class App extends Component {
  state = {};

  updateItems = () => {
    const retrievedItems = JSON.parse(localStorage.getItem("items"));
    this.setState({ items: retrievedItems });
  };

  componentWillMount() {
    const currentItems = JSON.parse(localStorage.getItem("items"));
    if (!currentItems) {
      localStorage.setItem("items", "[]");
    }
    const retrievedItems = JSON.parse(localStorage.getItem("items"));
    this.setState({ items: retrievedItems });
  }
  render() {
    return (
      <div className="App">
        <Topbar />
        <div className="container">
          <div className="row">
            <div className="col m2" />
            <div className="col s12 m8">
              <AddItem update={this.updateItems} />
              <ItemList items={this.state} />
            </div>
            <div className="col m2" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
