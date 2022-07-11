import store from '../../../redux/store';
import { getAllRecipes } from '../../../recipe/redux/RecipeSlice';
import { RecipeResponse } from '../../../recipe/service/RecipeResponse';
import RecipeService from '../../../recipe/service/RecipeService';
import RecipeMother from '../model/RecipeMother';
import { RecipeResponseMother } from '../service/RecipeResponseMother';

describe('RecipeSlice', () => {
  let apiResponse: RecipeResponse;

  beforeEach( () => {
    apiResponse = RecipeResponseMother.create();
    jest.spyOn(RecipeService, 'getAll').mockReturnValue(Promise.resolve(apiResponse));
  });

  it('should initially set recipe list to an empty list', async () => {
    const state = store.getState();

    expect(state.recipe.list).toEqual([]);
  });

  it('should be able to fetch all recipes', async () => {
    const expectedList = [ RecipeMother.fromRecipeData(apiResponse.data[0]) ];
    
    await store.dispatch(getAllRecipes());

    expect(store.getState().recipe.list).toEqual(expectedList);
  });

});