import { Component } from "react";
import axios from "axios";
import "./Recipe.css";
import { Link } from "react-router-dom";
import { BiFoodMenu } from "react-icons/bi";
import Logo from "../../assets/img/resipi-logo.png";
import { Fragment } from "react";

class Recipe extends Component {
  state = {
    recipe: [],
  };

  componentDidMount = async () => {
    const recipeId = this.props.location.state.recipeId; //Getting it from recipes where the link provided with state

    const recipe_api_res = await axios(
      `https://forkify-api.herokuapp.com/api/get?rId=${recipeId}`
    );
    const recipe = recipe_api_res.data.recipe;
    this.setState({
      recipe,
    });
    console.log(this.state.recipe.ingredients);
  };

  render() {
    return (
      <div className="resipi">
        {this.state.recipe.length !== 0 ? (
          <Fragment>
            <div className="leftbar--recipe_info">
              <div className="back--btn">
                <Link to="/">
                  <img src={Logo} alt="Resipi_logo" />
                  <span>Back</span>
                </Link>
              </div>
              <div className="recipe--title">
                <h1>{this.state.recipe.title}</h1>
              </div>
              <div className="recipe--image">
                <img
                  src={this.state.recipe.image_url}
                  alt={this.state.recipe.title}
                />
              </div>
            </div>
            <div className="rightbar--recipe_info">
              <div className="recipe--ingredient__title">
                <h1>Ingredients</h1>
              </div>
              <div className="recipe--ingredients">
                <ul className="recipe--ingredient__list">
                  {this.state.recipe.ingredients.map((ingredient) => {
                    return (
                      <li className="recipe--ingredient" key={Math.random()}>
                        <BiFoodMenu className="menu-icon" />
                        <span>{ingredient}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="recipe--source">
                <a href={this.state.recipe.source_url}>Source</a>
              </div>
            </div>
          </Fragment>
        ) : null}
      </div>
    );
  }
}
export default Recipe;
