import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import Recipe from '../../model/Recipe';
import { getAllRecipes, selectAllRecipes } from '../../redux/RecipeSlice';
import RecipeItem from '../item/RecipeItem';
import styled from 'styled-components';

const RecipeListContainer = styled.section`
  padding: 20px 100px;
`;

const RecipesContainer = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 30px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;

const RecipeList = () => {
  const list: Recipe[] = useAppSelector(selectAllRecipes);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllRecipes())
  }, [dispatch]);
 
  return (
    <RecipeListContainer>
      <RecipesContainer>
        <Title>Top selection</Title>
        { list.map((item) => <RecipeItem item={item} key={item.id}/>) }
      </RecipesContainer>
    </RecipeListContainer>
  )

}


export default RecipeList;
