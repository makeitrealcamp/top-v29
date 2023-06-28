import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { fetchCount } from './counterApi';

const initialState = { value: 0, status: 'idle' };

export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount) => {
    const response = await fetchCount(amount);

    return response.data;
  },
);

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, { payload }) => {
      state.value += payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, { payload }) => {
        state.status = 'idle';
        state.value += payload;
      })
      .addCase(incrementAsync.rejected, (state) => {
        state.status = 'error';
      });
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const selectCount = (state) => state.counter.value;

export default counterSlice.reducer;
