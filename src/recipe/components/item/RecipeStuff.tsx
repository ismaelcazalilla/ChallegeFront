import Recipe from '../../model/Recipe';
import styled from 'styled-components';

const RecipeStuffContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
`;

const RecipeStuffInfo = styled.p`
  font-size: 18px;
  color: #666;
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
