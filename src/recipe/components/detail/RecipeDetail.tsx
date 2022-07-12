import { selectSelectedRecipe } from "../../redux/RecipeSlice";
import { useAppSelector } from '../../../redux/hooks';
import Recipe from "../../model/Recipe";
import styled from 'styled-components';
import RecipeStuff from "../item/RecipeStuff";
import RecipeIngredients from "./RecipeIngredients";

const Main = styled.main`
  background-color: #fafafa;
  padding-top: 50px;
`;

const RecipeDescriptionContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 20px;

  @media(min-width: 600px) {
    padding: 20px 100px;
  }
`;

const RecipeInfoContainer = styled.section`
  display: flex;
  flex-direction: column;

  @media(min-width: 600px) {
    flex-direction: row;
    padding: 20px 100px;
  }
`;

const RecipeImg = styled.img`
  height: 250px;
  border-radius: 20px;
  object-fit: cover;

  @media(min-width: 600px) {
    height: 400px;
  }
`;

const RecipeInfo = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px;

  @media(min-width: 600px) {
    padding: 0;
  }
`;

const RecipeName = styled.h2`
 {
  font-size: 25px;
  font-weight: bold;
  color: #333;
  margin: 10px 0;
}`;

const RecipeCategory = styled.p`
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
  color: #666;
`;

const RecipeDescription = styled.h4`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
  text-align: center;

  @media(min-width: 600px) {
    text-align: left;
    font-size: 30px;
  }
`;

const RecipeDescriptionText = styled.p`
  font-size: 18px;
  color: #666;
  line-height: 1.5;
  letter-spacing: 0.2px;
`;

const RecipeDetail = () => {
  const selected: Recipe = useAppSelector(selectSelectedRecipe);

  return (
    <Main>
      <RecipeInfoContainer>
        <RecipeImg 
          src={selected.photo || process.env.REACT_APP_RECIPE_PHOTO_PLACEHOLDER}
          alt={selected.name}
        />
        <RecipeInfo>
          <RecipeCategory>{selected.categoryName}</RecipeCategory>
          <RecipeName>{selected.name}</RecipeName>
          <RecipeStuff item={selected} />
          <RecipeIngredients ingredients={selected?.ingredients} />
        </RecipeInfo>
      </RecipeInfoContainer>
      <RecipeDescriptionContainer>
        <RecipeDescription>Info</RecipeDescription>
        <RecipeDescriptionText>{selected.description}</RecipeDescriptionText>
      </RecipeDescriptionContainer>
    </Main>
  );

}

export default RecipeDetail;
