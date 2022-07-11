import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../redux/hooks";
import Recipe from '../../model/Recipe';
import { selectRecipe } from "../../redux/RecipeSlice";

const RecipeItem = (props: {item: Recipe }) => {
  const { item } = props;
  const dispatch = useAppDispatch();

  const navigateToRecipeDetail = () => dispatch(selectRecipe(item));

  return (
    <div className="recipe">
      <img
        className="recipe-image"
        src={item.photo || process.env.REACT_APP_RECIPE_PHOTO_PLACEHOLDER}
        alt={item.name}
      />
      <div className="recipe-info">
        <div>
          <p className="recipe-category">{item.categoryName}</p>
          <h3 className="recipe-name">{item.name}</h3>
          <div className="recipe-stuff">
            <p className="recipe-time">{item.duration} minutes</p>
            <p className="recipe-complexity">{item.complexity}</p>
            <p className="recipe-people">{item.people} people</p>
          </div>
        </div>
        <Link
          className="recipe-button"
          to={`/detail/${item.id}`}
          key={item.id}
          onClick={navigateToRecipeDetail}>
          See more
        </Link>
      </div>
    </div>
  );

}

export default RecipeItem;
