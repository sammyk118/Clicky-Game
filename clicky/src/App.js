import React, { Component } from "react";
import './App.css';
import Card from "./components/Cards";
import characters from "./mario.json";

class App extends Component {
  state = {
    characters: characters
  };

  render() {
    return (
      <div className="App">
        <nav class="nav navBar">
          <ul>
            <li>Clicky</li>
            <li>"Score: 0 | Top Score: 0"</li>
          </ul>
        </nav>
        <header class="header"> <h2>Click an image. The more you can click without clicking the same one twice, the better your score!</h2></header>
      </div>
    );
  }
}

export default App;
