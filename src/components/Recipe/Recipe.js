import { Component } from "react";
import axios from "axios";

class Recipe extends Component {
  state = {
    recipe: [],
  };

  componentDidMount = async () => {
    const recipeId = this.props.location.state.recipeId; //Getting it from recipes where the link provided with state

    const recipe_api_res = await axios(
      `https://forkify-api.herokuapp.com/api/get?rId=${recipeId}`
    );
    console.log(recipe_api_res.data.recipe);
    const recipe = recipe_api_res.data.recipe;
    this.setState({
      recipe,
    });
  };

  render() {
    return (
      <div className="resipi">
        <img src={this.state.recipe.image_url} alt={this.state.recipe.title} />
      </div>
    );
  }
}
export default Recipe;
