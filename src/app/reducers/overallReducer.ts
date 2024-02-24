import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OverallStatistics } from '../types/types';

interface OverallStatisticsState {
  overallStatistics: OverallStatistics | null;
}

const initialState: OverallStatisticsState = {
  overallStatistics: null,
};

const overallStatisticsSlice = createSlice({
  name: 'overallStatistics',
  initialState,
  reducers: {
    setOverallStatistics(state, action: PayloadAction<OverallStatistics>) {
      state.overallStatistics = action.payload;
    },
  },
});

export const { setOverallStatistics } = overallStatisticsSlice.actions;
export default overallStatisticsSlice.reducer;
