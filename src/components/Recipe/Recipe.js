import { Component } from "react";
//import axios from "axios";
import chicken from "../../assets/img/chicken-test.jpg";
import "./Recipe.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/resipi-logo.png";
import { BiFoodMenu } from "react-icons/bi";

class Recipe extends Component {
  state = {
    recipe: [],
  };

  // componentDidMount = async () => {
  //   const recipeId = this.props.location.state.recipeId; //Getting it from recipes where the link provided with state

  //   const recipe_api_res = await axios(
  //     `https://forkify-api.herokuapp.com/api/get?rId=${recipeId}`
  //   );
  //   console.log(recipe_api_res.data.recipe);
  //   const recipe = recipe_api_res.data.recipe;
  //   this.setState({
  //     recipe,
  //   });
  // };

  render() {
    return (
      <div className="resipi">
        <div className="leftbar--recipe_info">
          <div className="back--btn">
            <Link to="/">
              <img src={Logo} alt="Resipi_logo" />
              <span>Back</span>
            </Link>
          </div>
          <div className="recipe--title">
            <h1>Bacon Wrapped Jalapeno Popper Stuffed Chicken</h1>
          </div>
          <div className="recipe--image">
            <img src={chicken} alt="chicken" />
          </div>
        </div>
        <div className="rightbar--recipe_info">
          <div className="recipe--ingredient__title">
            <h1>Ingredients</h1>
          </div>
          <div className="recipe--ingredients">
            <ul className="recipe--ingredient__list">
              <li className="recipe--ingredient">
                <BiFoodMenu className="menu-icon" />
                <span>300 g basmati rice</span>
              </li>
              <li className="recipe--ingredient">
                <BiFoodMenu className="menu-icon" />
                <span>4 skinless chicken breasts cut into large chunks</span>
              </li>
              <li className="recipe--ingredient">
                <BiFoodMenu className="menu-icon" />
                <span>4 skinless chicken breasts cut into large chunks</span>
              </li>
              <li className="recipe--ingredient">
                <BiFoodMenu className="menu-icon" />
                <span>4 skinless chicken breasts cut into large chunks</span>
              </li>
              <li className="recipe--ingredient">
                <BiFoodMenu className="menu-icon" />
                <span>4 skinless chicken breasts cut into large chunks</span>
              </li>
              <li className="recipe--ingredient">
                <BiFoodMenu className="menu-icon" />
                <span>4 skinless chicken breasts cut into large chunks</span>
              </li>
            </ul>
          </div>
          <div className="recipe--source">
            <a href="https://www.google.com">
              Source
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Recipe;
