import { Link } from "react-router-dom";
import Recipe from "../../../recipe/model/Recipe"

export const RecommendedItem = (props: {item: Recipe, index: number }) => {
  const { item } = props;

  return (
    <Link to="/detail" key={item.id}>
      <img
        className="recommended-image"
        src={item.photo || process.env.REACT_APP_RECIPE_PHOTO_PLACEHOLDER}
        alt={item.name}
      />
    </Link>
  )
}
