import { Link } from "react-router-dom";
import Recipe from "../../../recipe/model/Recipe"
import { useAppDispatch } from "../../../redux/hooks";
import { selectRecipe } from "../../../recipe/redux/RecipeSlice";
import styled from 'styled-components';

const RecommendedImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px;
`;

export const RecommendedItem = (props: {item: Recipe, index: number }) => {
  const { item } = props;
  const dispatch = useAppDispatch();

  const navigateToRecipeDetail = () => dispatch(selectRecipe(item));
  
  return (
    <Link 
      to={`/detail/${item.id}`}
      key={item.id}
      onClick={navigateToRecipeDetail}>
      <RecommendedImg
        className="recommended-image"
        src={item.photo || process.env.REACT_APP_RECIPE_PHOTO_PLACEHOLDER}
        alt={item.name}
      />
    </Link>
  )
}
