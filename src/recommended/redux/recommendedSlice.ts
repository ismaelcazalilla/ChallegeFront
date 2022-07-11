import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import RecipeMapper from '../../recipe/service/ReciveMapper';
import RecommendedService from '../service/RecommendedService';

export const recommendedSlice = createSlice({
  name: 'recommended',
  initialState: {
    recommendedList: []
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllRecommended.fulfilled, (state, action) => {
      state.recommendedList = action.payload;
    });
  },
});

export const getAllRecommended = createAsyncThunk(
  'recommended/getAll',
  async () => {
    const response = await RecommendedService.getAll();
    return response.data.map(recipeData => RecipeMapper.map(recipeData));
  }
);

export const selectAllRecommended = (state) => state.recommendedList;
export default recommendedSlice.reducer;
