import Recipe from '../../model/Recipe';
import styled from 'styled-components';
import RecipeInfo from "./RecipeInfo";

const RecipeContainer = styled.article`
  display: flex;
  height: 300px;
  border-radius: 20px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: #bbb 0px 0px 5px;
  display: flex;
  flex-direction: column;

  @media(min-width: 600px) {
    flex-direction: row;
  }
`;

const RecipeImg = styled.img`
  width: 100%;
  height: 175px;
  object-fit: cover;
  
  @media(min-width: 600px) {
    height: 100%;
    width: auto;
  }
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
