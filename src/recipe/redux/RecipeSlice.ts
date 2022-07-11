import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../redux/store';
import Recipe from '../model/Recipe';
import RecipeService from '../service/RecipeService';
import RecipeMapper from '../service/ReciveMapper';
import { RecipeState } from './RecipeState';

export const initialRecipeState: RecipeState = {
  list: []
}

export const recipeSlice = createSlice({
  name: 'recipe',
  initialState: initialRecipeState,
  reducers: {},
  extraReducers: (builder): void => {
    builder.addCase(getAllRecipes.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

export const getAllRecipes = createAsyncThunk(
  'recipes/getAll', async (): Promise<Recipe[]> => {
    const response = await RecipeService.getAll();
    return response?.data?.map(recipeData => RecipeMapper.map(recipeData));
  }
);

export const selectAllRecipes = (state: RootState): Recipe[] => state.recipe.list;
export default recipeSlice.reducer;
