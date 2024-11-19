import { createSlice } from '@reduxjs/toolkit';

const incomeSlice = createSlice({
  name: 'incomes',
  initialState: { incomeData: [] },
  reducers: {
    addIncome: (state, action) => {
        state.incomeData.push(action.payload)
    //   console.log(state.incomeData)
    },
    deleteIncome: (state, action) => {
        state.incomeData=state.incomeData.filter((income,index)=>index!== action.payload)
    },
  },
});

export const { addIncome, editIncome, deleteIncome } = incomeSlice.actions;
export default incomeSlice.reducer;