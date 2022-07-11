import { Link } from "react-router-dom";
import Recipe from "../../../recipe/model/Recipe"

export const RecommendedItem = (props: {item: Recipe, index: number }) => {
  const { item } = props;

  return (
    <Link to="/detail" key={item.id}>
      {renderImageBox(item)}
    </Link>
  )
}

function renderImageBox(item: Recipe) {
  let imageUrl = "http://via.placeholder.com/640x360";
  if (item && item.photo) {
    imageUrl = item.photo;
  }
  return <img className="recommended-image" src={imageUrl} alt={item.name}/>;
}
