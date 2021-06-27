import "./Recipes.css";
import { Link } from "react-router-dom";

const Recipes = (props) => {
  return props.error !== true ? (
    <div className="recipes">
      {props.recipes.map((recipe, index) => {
        return (
          <div className={`recipe recipe-${index}`} key={Math.random()}>
            <img src={recipe.image_url} alt={recipe.title} />
            <div className="recipe-info">
              <h2>{recipe.title}</h2>
              <button className="view-recipe">
                <Link
                  to={{
                    pathname: `/recipe/${recipe.recipe_id}`,
                    state: { recipeId: recipe.recipe_id },
                  }}
                >
                  Details
                </Link>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  ) : (
    <div className="no--recipe__msg">
      <h1>Oops! There is nothing in our recipe book Sorry!! 🙏 🙏</h1>
    </div>
  );
};

export default Recipes;
