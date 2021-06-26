import "./Recipe.css";

const Recipe = (props) => {
  return props.error !== true ? (
    <div className="recipes">
      {props.recipes.map((recipe, index) => {
        return (
          <div className={`recipe recipe-${index}`} key={Math.random()}>
              <img src={recipe.image_url} alt={recipe.title} />
              <h2>{recipe.title}</h2>
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

export default Recipe;
