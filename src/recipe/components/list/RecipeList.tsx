import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import Recipe from '../../model/Recipe';
import { getAllRecipes, selectAllRecipes } from '../../redux/RecipeSlice';

const RecipeList = () => {
  const list: Recipe[] = useAppSelector(selectAllRecipes);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllRecipes())
  }, [dispatch]);
 
  return (
    <div className="container-bottom">
    {" "}
    <div className="recipes">
      <h1 className="recipes-title">Top selection</h1>
      {list.map((item, index) => {
        return (
          <div className="recipe">
            {renderImage(item)}
            <div className="recipe-info">
              <div>
                <p className="recipe-category">{item.categoryName}</p>
                <h1 className="recipe-name">{item.name}</h1>
                <div className="recipe-stuff">
                  <p className="recipe-time">{item.duration} minutes</p>
                  <p className="recipe-complexity">{item.complexity}</p>
                  <p className="recipe-people">{item.people} people</p>
                </div>
              </div>
              <Link className="recipe-button" to="/detail" key={index}>
                See more
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  </div>
  )

}

function renderImage(item) {
  let imageUrl = "http://via.placeholder.com/640x360";
  if (item && item.photo) {
    imageUrl = item.photo;
  }
  return <img className="recipe-image" src={imageUrl} />;
}


export default RecipeList;
