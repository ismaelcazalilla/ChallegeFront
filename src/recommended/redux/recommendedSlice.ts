import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import RecommendedService from '../service/RecommendedService';

export const recommendedSlice = createSlice({
  name: 'recommended',
  initialState: {
    list: []
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllRecommended.fulfilled, (state, action) => {
      state.list = action.payload;
    })
  },
});

export const getAllRecommended = createAsyncThunk(
  'recommended/getAll',
  async () => {
    const response = await RecommendedService.getAll();
    return response || [];
  }
);

export const selectAllRecommended = (state) => state.recommended.list
export default recommendedSlice.reducer;
