import { Link } from "react-router-dom";
import Recipe from "../../../recipe/model/Recipe"

export const RecommendedItem = (props: {item: Recipe, index: number }) => {
  const { item , index } = props;

  return (
    <Link to="/detail" key={index.toString()}>
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
