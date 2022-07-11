import { selectSelectedRecipe } from "../../redux/RecipeSlice";
import { useAppSelector } from '../../../redux/hooks';
import Recipe from "../../model/Recipe";

const RecipeDetail = () => {
  const selected: Recipe = useAppSelector(selectSelectedRecipe);

  return (
    <div className="page">
      <div className="top">
        <img 
          src={selected.photo || process.env.REACT_APP_RECIPE_PHOTO_PLACEHOLDER}
          alt={selected.name}
        />
        <div className="top-information">
          <p className="recipe-detail-category">{selected.categoryName}</p>
          <h1 className="recipe-detail-name">{selected.name}</h1>
          <div className="recipe-detail-stuff">
            <p className="recipe-detail-time">{selected.duration} minutes</p>
            <p className="recipe-detail-complexity">{selected.complexity}</p>
            <p className="recipe-detail-people">{selected.people} people</p>
          </div>
          <div className="ingredients">
            <h4>Ingredients</h4>
            {selected.ingredients.split("\r\n").map((ingredient, index) => (
              <p key={index}>{ingredient}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="bottom">
        <h4 className="description">Info</h4>
        <p className="description-text">{selected.description}</p>
      </div>
    </div>
  );

}

export default RecipeDetail;
