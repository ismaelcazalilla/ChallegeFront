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
      {renderImage(item)}
      <div className="recipe-info">
        <div>
          <p className="recipe-category">{item.categoryName}</p>
          <h1 className="recipe-name">{item.name}</h1>
          <div className="recipe-stuff">
            <p className="recipe-time">{item.duration} minutes</p>
            <p className="recipe-complexity">{item.complexity}</p>
            <p className="recipe-people">{item.people} people</p>
          </div>
        </div>
        <Link
          className="recipe-button"
          to="/detail"
          key={item.id}
          onClick={navigateToRecipeDetail}>
          See more
        </Link>
      </div>
    </div>
  );

}

function renderImage(item: Recipe) {
  let imageUrl = "http://via.placeholder.com/640x360";
  if (item && item.photo) {
    imageUrl = item.photo;
  }
  return <img className="recipe-image" src={imageUrl} alt={item.name} />;
}

export default RecipeItem;
