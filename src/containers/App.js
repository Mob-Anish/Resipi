import "./App.css";
import Header from "../components/Header/Header";
import Recipes from "../components/Recipes/Recipes";
import { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    recipes: [],
    error: false,
  };

  getFocus = (e) => {
    e.target.placeholder = "";
  };

  getBlur = (e) => {
    e.target.placeholder = "Search your 🍲";
  };

  getRecipe = async (e) => {
    e.preventDefault();
    let recipeName = e.target.childNodes[0];
    try {
      let recipe_api_res = await axios(
        `https://forkify-api.herokuapp.com/api/search?q=${recipeName.value}`
      );
      const recipes = recipe_api_res.data.recipes;
      // e.target.elements.(input-name).value  -> same as below
      recipeName.value = "";
      e.target.childNodes[0].blur();
      this.setState({
        recipes,
        error: false,
      });
    } catch (err) {
      console.log(err);
      this.setState({
        error: true,
      });
      recipeName.value = "";
      e.target.childNodes[0].blur();
    }
    console.log(this.state);
  };

  render() {
    return (
      <div className="App">
        <Header
          recipe={this.getRecipe}
          focus={this.getFocus}
          blur={this.getBlur}
        />
        <Recipes recipes={this.state.recipes} error={this.state.error} />
      </div>
    );
  }
}

export default App;
