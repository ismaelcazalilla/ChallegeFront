import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../redux/store';
import Recipe from '../model/Recipe';
import RecipeService from '../service/RecipeService';
import RecipeMapper from '../service/ReciveMapper';
import { RecipeState } from './RecipeState';

export const initialRecipeState: RecipeState = {
  list: [],
  selected: null
}

export const recipeSlice = createSlice({
  name: 'recipe',
  initialState: initialRecipeState,
  reducers: {
    selectRecipe: (state, action: PayloadAction<Recipe>) => {
      state.selected = action.payload
    }
  },
  extraReducers: (builder): void => {
    builder.addCase(getAllRecipes.fulfilled, (state, action: PayloadAction<Recipe[]>) => {
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

export const { selectRecipe } = recipeSlice.actions

export const selectAllRecipes = (state: RootState): Recipe[] => state.recipe.list;
export const selectSelectedRecipe = (state: RootState): Recipe => state.recipe.selected;

export default recipeSlice.reducer;
