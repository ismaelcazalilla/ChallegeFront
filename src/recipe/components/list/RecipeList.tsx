import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import Recipe from '../../model/Recipe';
import { getAllRecipes, selectAllRecipes } from '../../redux/RecipeSlice';
import RecipeItem from '../recipe/RecipeItem';

const RecipeList = () => {
  const list: Recipe[] = useAppSelector(selectAllRecipes);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllRecipes())
  }, [dispatch]);
 
  return (
    <div className="container-bottom">
      <div className="recipes">
        <h2 className="recipes-title">Top selection</h2>
        { list.map((item) => <RecipeItem item={item} key={item.id}/>) }
      </div>
    </div>
  )

}


export default RecipeList;
