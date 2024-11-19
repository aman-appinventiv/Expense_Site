
import { createSlice } from '@reduxjs/toolkit';

const expenseSlice = createSlice({
  name: 'expenses',
  initialState: {expenseData:[]},
  reducers: {
    addExpense: (state, action) => {
      state.expenseData.push(action.payload);
    },
    deleteExpense: (state, action) => {
      state.expenseData=state.expenseData.filter((expense,index) => index !== action.payload);
    },
  },
});

export const { addExpense, editExpense, deleteExpense } = expenseSlice.actions;
export default expenseSlice.reducer;


