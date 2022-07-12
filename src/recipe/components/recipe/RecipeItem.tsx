import Recipe from '../../model/Recipe';
import styled from 'styled-components';
import RecipeInfo from "./RecipeInfo";

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


const RecipeItem = (props: {item: Recipe }) => {
  const { item } = props;

  return (
    <RecipeContainer>
      <RecipeImg        
        src={item.photo || process.env.REACT_APP_RECIPE_PHOTO_PLACEHOLDER}
        alt={item.name}
      />
      <RecipeInfo item={item} />
    </RecipeContainer>
  );

}

export default RecipeItem;
