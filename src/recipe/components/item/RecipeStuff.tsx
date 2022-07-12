import Recipe from '../../model/Recipe';
import styled from 'styled-components';

const RecipeStuffContainer = styled.div`
  display: flex;
  margin-top: 0px;
  justify-content: flex-start;

  @media(min-width: 600px) {
    gap: 20px;
  }
`;

const RecipeStuffInfo = styled.span`
  font-size: 18px;
  color: #666;
  width: auto;
  padding-right: 10px;
`;


const RecipeStuff = (props: {item: Recipe }) => {
  const { item } = props;

  return (
    <RecipeStuffContainer>
      <RecipeStuffInfo>{item.duration} minutes</RecipeStuffInfo>
      <RecipeStuffInfo>{item.complexity}</RecipeStuffInfo>
      <RecipeStuffInfo>{item.people} people</RecipeStuffInfo>
    </RecipeStuffContainer>
  );

}

export default RecipeStuff;
