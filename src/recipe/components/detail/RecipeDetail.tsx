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

const RecipeContainer = styled.section`
  padding: 20px 100px;
`;

const RecipeContainerFlex = styled(RecipeContainer)`
  display: flex;
`;

const RecipeImg = styled.img`
  height: 400px;
  border-radius: 20px;
`;

const RecipeInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

const RecipeName = styled.h2`
 {
  font-size: 25px;
  font-weight: bold;
  color: #333;
  margin-top: 10px;
}`;

const RecipeIngredient = styled.p`
  margin-top: 10px;
  text-align: center;
`;

const RecipeCategory = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #666;
`;

const RecipeDescription = styled.h4`
  font-size: 30px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
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
      <RecipeContainerFlex>
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
      </RecipeContainerFlex>
      <RecipeContainer>
        <RecipeDescription>Info</RecipeDescription>
        <RecipeDescriptionText>{selected.description}</RecipeDescriptionText>
      </RecipeContainer>
    </Main>
  );

}

export default RecipeDetail;
