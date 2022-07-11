import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { getAllRecommended, selectAllRecommended } from '../../redux/RecommendedSlice';
import { RecommendedItem } from '../recommended/RecommendedItem';
import Recipe from '../../../recipe/model/Recipe';

const RecommendedList = () => {
  const list: Recipe[] = useAppSelector(selectAllRecommended);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllRecommended())
  }, [dispatch]);
 
  return (
    <div className="container-top">
      <div>
        <h1 className="title">Recommended</h1>
        <div className="recommendations">
          {list.map((item: Recipe, index: number) =>
            <RecommendedItem item={item} index={index} />
          )}
        </div>
      </div>
    </div>
  )

}


export default RecommendedList;
