import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addIncome, deleteIncome } from "../../../utils/Redux/incomeSlice";

const Income = () => {
  const dispatch = useDispatch();
  const incomes = useSelector((state) => state.incomes?.incomeData);
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const totalIncome = incomes.reduce(
    (total, income) => total + income.amount,
    0
  );
  const [trackData, setTrackData] = useState(false);

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleAddIncome = (e) => {
    e.preventDefault();
    const income = {
      date: date,
      category: category,
      amount: parseFloat(amount),
    };
    dispatch(addIncome(income));
    setCategory("");
    setAmount("");
    setDate("");
  };
  const handleEditIncome = (data) => {
    const index = incomes.findIndex((income, index) => index === data);
    setCategory(incomes[index].category);
    setAmount(incomes[index].amount);
    setDate(incomes[index].date);
    dispatch(deleteIncome(index));
  };

  const handleDeleteIncome = (index) => {
    dispatch(deleteIncome(index));
  };

  return (
    <div className="m-auto mt-2 w-full md:w-[40%]">
      <div className="flex flex-col gap-5 w-full border border-slate-300 rounded-md mb-2">
        <h3 className="p-2 font-bold text-3xl">Income</h3>
        <form
          onSubmit={handleAddIncome}
          className="w-full p-2 flex flex-col text-lg"
        >
          <label htmlFor="date" className="p-2 font-bold text-3xl">
            Date
          </label>
          <input
            type="date"
            value={date}
            max={new Date().toISOString().split("T")[0]}
            placeholder="Set Date"
            onChange={handleDate}
            className="p-2 text-lg outline outline-1 rounded-md"
            id="date"
            required
          />
          <label htmlFor="category" className="p-2 font-bold text-3xl">
            Category
          </label>
          <input
            type="text"
            placeholder="Enter Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-2 text-lg outline outline-1 rounded-md"
            id="category"
            required
          />
          <label htmlFor="amount" className="p-2 font-bold text-3xl">
            Amount
          </label>
          <input
            type="number"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="p-2 text-lg outline outline-1 rounded-md"
            id="amount"
            required
          />
          <button className="mt-2 p-5 rounded-md text-lg bg-green-300 w-[100%] mid-[25%]">
            Add Income
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
          {incomes.length > 0 ? (
            <ul className="flex flex-col gap-2">
              {incomes.map((income, index) => (
                <li
                  key={index}
                  className="m-2 flex flex-col gap-2 justify-center items-center border border-slate-200 rounded-md"
                >
                  <div className="flex flex-col md:flex-row justify-center items-center gap-2">
                    <div>Date : {income.date}</div>
                    <div>Category : {income.category}</div>
                    <div>Amount : {income.amount}</div>
                  </div>
                  <div className="flex flex-col md:flex-row justify-between items-center m-2 gap-2">
                    <button
                      className=" p-3 rounded-md text-lg bg-green-300 w-[100%] mid-[25%]"
                      onClick={() => handleDeleteIncome(index)}
                    >
                      Delete
                    </button>
                    <button
                      className=" p-3 rounded-md text-lg bg-green-300 w-[100%] mid-[25%]"
                      onClick={() => handleEditIncome(index)}
                    >
                      Edit
                    </button>
                  </div>
                </li>
              ))}
              <div className="p-3 rounded-md text-3xl bg-green-300 w-[100%] mid-[25%] flex">
                <div className="mx-auto">Total Income: {totalIncome}</div>
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

export default Income;
