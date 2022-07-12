import { selectSelectedRecipe } from "../../redux/RecipeSlice";
import { useAppSelector } from '../../../redux/hooks';
import Recipe from "../../model/Recipe";
import styled from 'styled-components';
import RecipeStuff from "../item/RecipeStuff";

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

const RecipeDetail = () => {
  const selected: Recipe = useAppSelector(selectSelectedRecipe);

  return (
    <Main>
      <RecipeContainerFlex>
        <RecipeImg 
          src={selected.photo || process.env.REACT_APP_RECIPE_PHOTO_PLACEHOLDER}
          alt={selected.name}
        />
        <div className="top-information">
          <p className="recipe-detail-category">{selected.categoryName}</p>
          <h2 className="recipe-detail-name">{selected.name}</h2>
          <RecipeStuff item={selected} />
          <div className="ingredients">
            <h3>Ingredients</h3>
            {selected.ingredients.splitIngredients().map((ingredient, index) => (
              <p key={`${index}_ingredients`}>{ingredient}</p>
            ))}
          </div>
        </div>
      </RecipeContainerFlex>
      <RecipeContainer>
        <h4 className="description">Info</h4>
        <p className="description-text">{selected.description}</p>
      </RecipeContainer>
    </Main>
  );

}

export default RecipeDetail;
