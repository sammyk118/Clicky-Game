import React, { Component} from "react";
import './App.css';
import Card from "./components/Cards";
import characters from "./mario.json";

class App extends Component {
    state = {
      characters: characters,
      score: 0,
      highScore: 0,
      usedArr: []
    };
  
  shuffle = id => {
    console.log(id);
    let clickedArr = this.state.usedArr;
    let charArr = this.state.characters;

    if (clickedArr.indexOf(id) === -1) {
      clickedArr.push(id);
      
      for (let i = charArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [charArr[i], charArr[j]] = [charArr[j], charArr[i]];
      }

      this.setState({ characters: charArr, score: this.state.score + 1, usedArr: clickedArr })
      if (this.state.score >= this.state.highScore) {
        this.setState({highScore: this.state.score})
      }
      console.log(this.state.usedArr);
    }
    else {
      console.log("poor choice!")
      this.setState({score: 0, usedArr: []})
    }
    }

  render() {
    return (
      <div className="App">
        <nav className="nav navBar">
          <ul>
            <li className="nav-item">Clicky</li>
            <li>Score: {this.state.score} | Top Score: {this.state.highScore}</li>
          </ul>
        </nav>
        <header className="header"> <h2>Click an image. The more you can click without clicking the same one twice, the better your score!</h2></header>
        <div className="container">
        <div className="row">
          {this.state.characters.map(character => (
            <Card
              key={character.id}
              id={character.id}
              name={character.name}
              image={character.image}
              shuffle={this.shuffle}
            />))}
            </div>
        </div>
      </div>
    );
  }
}

export default App;
