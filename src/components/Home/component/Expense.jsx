import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addExpense, deleteExpense } from "../../../utils/Redux/expenseSlice";

const Expense = () => {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expenses?.expenseData);
  const totalExpenses = expenses.reduce(
    (total, expense) => total + expense.expense,
    0
  );
  const [trackData, setTrackData] = useState(false);

  //   console.log(expenses,"expenses")

  const handleDate = (e) => {
    setDate(e.target.value);
  };
  const handleAddExpense = (e) => {
    // console.log("aman")
    e.preventDefault();
    const expense = {
      date: date,
      category: category,
      expense: parseFloat(amount),
    };
    dispatch(addExpense(expense));
    setAmount("");
    setCategory("");
    setDate("");
  };
  const handleEditExpense = (data) => {
    const index = expenses.findIndex((expense, index) => index === data);
    setCategory(expenses[index].category);
    setAmount(expenses[index].expense);
    setDate(expenses[index].date);
    dispatch(deleteExpense(index));
  };
  const handleDeleteExpense = (index) => {
    dispatch(deleteExpense(index));
  };

  return (
    <div className="m-auto mt-2 w-full md:w-[40%]">
      <div className="flex flex-col gap-5 w-full border border-slate-300 rounded-md mb-2">
        <h2 className="p-2 font-bold text-3xl">Add Expense</h2>
        <form
          onSubmit={handleAddExpense}
          className="w-full p-2 flex flex-col text-lg"
        >
          <label htmlFor="date" className="p-2 font-bold text-3xl">
            Date
          </label>
          <input
            type="date"
            value={date}
            max={new Date().toISOString().split("T")[0]}
            placeholder="Enter Date"
            onChange={handleDate}
            className="p-2 text-lg outline outline-1 rounded-md"
            required
            id="date"
          />
          <label htmlFor="category" className="p-2 font-bold text-3xl">
            Category
          </label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Enter Category"
            className="p-2 text-lg outline outline-1 rounded-md"
            required
            id="category"
          />
          <label htmlFor="expense" className="p-2 font-bold text-3xl">
            Expense
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter Expense"
            className="p-2 text-lg outline outline-1 rounded-md"
            required
            id="expense"
          />
          <button className="mt-2 p-5 rounded-md text-lg bg-green-300 w-[100%] mid-[25%]">
            Add Expense
          </button>
        </form>
      </div>
      <button
        className=" p-3 rounded-md text-lg bg-green-300 w-[100%] mid-[25%]"
        onClick={() => setTrackData(true)}
      >
        Track Data
      </button>
      {trackData && (
        <div>
          {expenses.length > 0 ? (
            <ul className="flex flex-col gap-2">
              {expenses.map((item, index) => (
                <li
                  key={index}
                  className="m-2 flex flex-col gap-2 justify-center items-center border border-slate-200 rounded-md"
                >
                  <div className="flex flex-col md:flex-row justify-center items-center gap-2">
                    <div>Date : {item.date}</div>
                    <div>Category : {item.category}</div>
                    <div>Expense : {item.expense}</div>
                  </div>
                  <div className="flex flex-col md:flex-row justify-between items-center m-2 gap-2">
                    <button
                      className=" p-3 rounded-md text-lg bg-green-300 w-[100%] mid-[25%]"
                      onClick={() => handleDeleteExpense(index)}
                    >
                      Delete
                    </button>
                    <button
                      className=" p-3 rounded-md text-lg bg-green-300 w-[100%] mid-[25%]"
                      onClick={() => handleEditExpense(index)}
                    >
                      Edit
                    </button>
                  </div>
                </li>
              ))}
              <div className="p-3 text-3xl rounded-md bg-green-300 w-[100%] mid-[25%] flex">
                <div className="mx-auto">Total Expenses: {totalExpenses}</div>
              </div>
            </ul>
          ) : (
            <div className="mx-auto mt-2 p-3 text-3xl rounded-md bg-green-300 w-[50%] mid-[25%] flex">
              <div className="m-auto">No Data Saved</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Expense;
