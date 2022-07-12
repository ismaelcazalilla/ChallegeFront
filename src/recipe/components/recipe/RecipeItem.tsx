import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../redux/hooks";
import Recipe from '../../model/Recipe';
import { selectRecipe } from "../../redux/RecipeSlice";
import styled from 'styled-components';

const RecipeContainer = styled.section`
  display: flex;
  height: 300px;
  border-radius: 20px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: #bbb 0px 0px 5px;
`;

const RecipeImg = styled.img`
  height: 100%;
`;

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

const RecipeStuff = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
`;

const RecipeStuffInfo = styled.p`
  font-size: 18px;
  color: #666;
`;


const RecipeItem = (props: {item: Recipe }) => {
  const { item } = props;
  const dispatch = useAppDispatch();

  const navigateToRecipeDetail = () => dispatch(selectRecipe(item));

  return (
    <RecipeContainer>
      <RecipeImg        
        src={item.photo || process.env.REACT_APP_RECIPE_PHOTO_PLACEHOLDER}
        alt={item.name}
      />
      <RecipeInfoContainer>
        <div>
          <RecipeCategory>{item.categoryName}</RecipeCategory>
          <RecipeName>{item.name}</RecipeName>
          <RecipeStuff>
            <RecipeStuffInfo>{item.duration} minutes</RecipeStuffInfo>
            <RecipeStuffInfo>{item.complexity}</RecipeStuffInfo>
            <RecipeStuffInfo>{item.people} people</RecipeStuffInfo>
          </RecipeStuff>
        </div>
        <Link
          className="recipe-button"
          to={`/detail/${item.id}`}
          key={item.id}
          onClick={navigateToRecipeDetail}>
          See more
        </Link>
      </RecipeInfoContainer>
    </RecipeContainer>
  );

}

export default RecipeItem;
