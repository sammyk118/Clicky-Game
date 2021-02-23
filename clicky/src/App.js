import React, { Component} from "react";
import './App.css';
import Card from "./components/Cards";
import characters from "./mario.json";

class App extends Component {
  // constructor() {
    state = {
      characters: characters
    };
  
  shuffle = id => {
    let charArr = this.state.characters;
    for (let i = charArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [charArr[i], charArr[j]] = [charArr[j], charArr[i]];
    }
    this.setState({characters: charArr})
  }

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
        <main class="container">
        <div class="row">
          {this.state.characters.map(character => (
            <Card
              id={character.id}
              name={character.name}
              image={character.image}
              shuffle={this.shuffle}
            />))}
            </div>
        </main>
      </div>
    );
  }
}

export default App;
