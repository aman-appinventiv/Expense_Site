import React, { useState } from "react";
import { useNavigate } from "react-router";

function Home() {
  const [date, setDate] = useState();
  const navigate = useNavigate();

  return (
    <div className="mt-5">
      {/* <div className=' mx-auto flex flex-col gap-5 justify-center items-center'> */}
      <div className=" flex gap-5 justify-center items-center">
        <button
          className=" btn p-5 rounded-md text-lg bg-green-300 w-[25%]"
          onClick={() => navigate("/expense")}
        >
          Add or Track Expense
        </button>
        <button
          className=" btn p-5 rounded-md text-lg bg-green-300 w-[25%]"
          onClick={() => navigate("/income")}
        >
          Add or Track Income
        </button>
        <button
          className=" btn p-5 rounded-md text-lg bg-green-300 w-[25%]"
          onClick={() => navigate("/visualization")}
        >
          See visualization
        </button>
      </div>
      {/* </div> */}
    </div>
  );
}

export default Home;
