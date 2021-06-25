import "./App.css";
import Header from "../components/Header/Header";
import { Component } from "react";

class App extends Component {
  getFocus = (e) => {
    e.target.placeholder = "";
  };

  getBlur = (e) => {
    e.target.placeholder = "Search your 🍲";
  };

  getRecipe = (e) => {
    e.preventDefault();
    e.target.childNodes[0].value = "";
    e.target.childNodes[0].blur();
    console.log("HI");
  };

  render() {
    return (
      <div className="App">
        <Header recipe={this.getRecipe} focus={this.getFocus} blur={this.getBlur}/>
      </div>
    );
  }
}

export default App;
