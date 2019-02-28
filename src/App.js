import React, { Component } from "react";
import Topbar from "./Layout/Topbar";
import AddItem from "./Components/AddItem";
import "./App.css";
import ItemList from "./Components/ItemList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Topbar />
        <div className="container">
          <div className="row">
            <div className="col m2" />
            <div className="col s12 m8">
              <AddItem />
              <ItemList />
            </div>
            <div className="col m2" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
