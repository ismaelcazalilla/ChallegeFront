import { configureStore } from '@reduxjs/toolkit';
import recommendedSlice from '../recommended/redux/RecommendedSlice';

const store = configureStore({
  reducer: recommendedSlice
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;