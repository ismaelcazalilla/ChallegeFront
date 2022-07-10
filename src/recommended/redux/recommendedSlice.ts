import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
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
    return response.data;
  }
);

export const selectAllRecommended = (state) => state.recommendedList;
export default recommendedSlice.reducer;
