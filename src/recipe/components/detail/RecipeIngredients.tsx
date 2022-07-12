import styled from 'styled-components';
import Ingredients from "../../model/Ingredients";


const RecipeIngredientsContainer = styled.div`
  margin-top: 40px;
  width: 100%;

  @media(min-width: 600px) {
    width: auto;
  }
`;

const RecipeIngredientsTitle = styled.h4`
  font-size: 20px;
  color: #333;
  font-weight: bold;
  text-align: center
`;

const RecipeIngredient = styled.p`
  margin-top: 10px;
  text-align: left;

  @media(min-width: 600px){
    text-align: center;
  }
`;


const RecipeIngredients = (props: { ingredients: Ingredients }) => {
  const { ingredients } = props;

  return (
    <RecipeIngredientsContainer>
      <RecipeIngredientsTitle>Ingredients</RecipeIngredientsTitle>
      {ingredients.splitIngredients().map((ingredient, index) => (
        <RecipeIngredient key={`${index}_ingredients`}>{ingredient}</RecipeIngredient>
      ))}
    </RecipeIngredientsContainer>
  );

}

export default RecipeIngredients;
