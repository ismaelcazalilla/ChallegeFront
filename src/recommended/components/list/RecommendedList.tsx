import { useEffect } from 'react';
import { Link } from "react-router-dom";

import { useAppSelector, useAppDispatch } from '../../../redux/hooks';
import { getAllRecommended, selectAllRecommended } from '../../redux/RecommendedSlice';

const RecommendedList = () => {
  const list = useAppSelector(selectAllRecommended);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllRecommended())
  }, [dispatch]);
 
  return (
    <div>
      <h1 className="title">Recommended</h1>
      <div className="recommendations">
        {list.map((item, index) => {
          return (
            <Link to="/detail" key={index}>
              {renderImageBox(item)}
          </Link>
          )
        })}
      </div>
    </div>
  )

}

function renderImageBox(item) {
  let imageUrl = "http://via.placeholder.com/640x360";
  if (item && item.photo) {
    imageUrl = item.photo;
  }
  return <img className="recommended-image" src={imageUrl} />;
}


export default RecommendedList;
