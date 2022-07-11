import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Recipe from '../../recipe/model/Recipe';
import RecipeMapper from '../../recipe/service/ReciveMapper';
import { RootState } from '../../redux/store';
import RecommendedService from '../service/RecommendedService';
import { RecommendedState } from './RecommendedState';

export const initialRecommendedState: RecommendedState = {
  list: []
}

export const recommendedSlice = createSlice({
  name: 'recommended',
  initialState: initialRecommendedState,
  reducers: {},
  extraReducers: (builder): void => {
    builder.addCase(getAllRecommended.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

export const getAllRecommended = createAsyncThunk(
  'recommended/getAll', async (): Promise<Recipe[]> => {
    const response = await RecommendedService.getAll();
    return response?.data?.map(recipeData => RecipeMapper.map(recipeData));
  }
);

export const selectAllRecommended = (state: RootState): Recipe[] => state.recommended.list;
export default recommendedSlice.reducer;
