import store from '../../../redux/store';
import RecommendedService from '../../../recommended/service/RecommendedService';
import { RecommendedResponseMother } from '../service/RecommendedResponseMother';
import { getAllRecommended } from '../../../recommended/redux/RecommendedSlice';
import { RecommendedResponse } from '../../../recommended/service/RecommendedResponse';
import RecipeMother from '../../recipe/model/RecipeMother';

describe('RecommendedSlice', () => {
  let apiResponse: RecommendedResponse;

  beforeEach( () => {
    apiResponse = RecommendedResponseMother.create();
    jest.spyOn(RecommendedService, 'getAll').mockReturnValue(Promise.resolve(apiResponse));
  });

  it('should initially set recommended list to an empty list', async () => {
    const state = store.getState();

    expect(state.recommended.list).toEqual([]);
  });

  it('should be able to fetch all recommended', async () => {
    const expectedList = [ RecipeMother.fromRecommendedData(apiResponse.data[0]) ]
    
    await store.dispatch(getAllRecommended());

    expect(store.getState().recommended.list).toEqual(expectedList);
  });

});
