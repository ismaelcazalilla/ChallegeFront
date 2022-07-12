import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../redux/hooks";
import Recipe from '../../model/Recipe';
import { selectRecipe } from "../../redux/RecipeSlice";
import styled from 'styled-components';
import RecipeStuff from "./RecipeStuff";


const RecipeInfoContainer = styled.div`
  flex: 1;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const RecipeCategory = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #666;
`;

const RecipeName = styled.h3`
  font-size: 25px;
  font-weight: bold;
  color: #333;
  margin-top: 10px;
`;

const SeeMoreButton = styled(Link)`
  align-self: flex-end;
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  border-radius: 20px;
  text-decoration: none;

  &:hover {
    align-self: flex-end;
    background-color: #333;
    color: #fff;
    padding: 10px 20px;
    border-radius: 20px;
    background-color: black;
  }

  &:active {
    align-self: flex-end;
    background-color: #333;
    color: #fff;
    padding: 10px 20px;
    border-radius: 20px;
    background-color: black;
    transform: scale(0.9);
  }
`;

const RecipeInfo = (props: {item: Recipe }) => {
  const { item } = props;
  const dispatch = useAppDispatch();

  const navigateToRecipeDetail = () => dispatch(selectRecipe(item));

  return (
    <RecipeInfoContainer>
      <div>
        <RecipeCategory>{item.categoryName}</RecipeCategory>
        <RecipeName>{item.name}</RecipeName>
        <RecipeStuff item={item} />
      </div>
      <SeeMoreButton
        className="recipe-button"
        to={`/detail/${item.id}`}
        key={item.id}
        onClick={navigateToRecipeDetail}>
        See more
      </SeeMoreButton>
    </RecipeInfoContainer>
  );

}

export default RecipeInfo;
