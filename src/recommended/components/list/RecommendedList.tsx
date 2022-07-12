import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { getAllRecommended, selectAllRecommended } from '../../redux/RecommendedSlice';
import { RecommendedItem } from '../item/RecommendedItem';
import Recipe from '../../../recipe/model/Recipe';
import styled from 'styled-components';

const RecommendedListContainer = styled.section`
  padding: 20px;

  @media(min-width: 600px) {
    padding: 20px 100px;
  }
`;

const RecommendedContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  height: 200px;
  align-items: stretch;
  justify-content: space-evenly;

  @media(min-width: 600px) {
    height: auto;
  }
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;

  @media(min-width: 600px) {
    font-size: 30px;
    margin-bottom: 20px;
  }
`;

const RecommendedList = () => {
  const list: Recipe[] = useAppSelector(selectAllRecommended);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllRecommended())
  }, [dispatch]);
 
  return (
    <RecommendedListContainer>
      <Title>Recommended</Title>
      <RecommendedContainer>{list.map((item: Recipe, index: number) =>
          <RecommendedItem item={item} index={index} key={`${item.id}_recommended`}/>
        )}
      </RecommendedContainer>
    </RecommendedListContainer>
  )

}


export default RecommendedList;
