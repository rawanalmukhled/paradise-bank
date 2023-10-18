import React, { useContext, useState } from "react";
import { deposit } from "../api/auth";
import UserContext from "../Context/UserContext";

const Deposit = () => {
  const [user, setUser] = useContext(UserContext);
  const [amount, setAmount] = useState("");

  const handleDeposite = (e) => {
    e.preventDefault();
    console.log("Amount deposited:", amount);
    setUser(e);
    // check this!!!
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white-100">
      <form
        onSubmit={handleDeposite}
        className="bg-red-200 p-10 rounded shadow-md w-96"
      >
        <div className="mb-4">
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Enter Amount:
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="p-2 w-full border rounded"
            placeholder="Enter amount of money"
          />
        </div>
        <button
          type="submit"
          className="bg-red-400 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Deposit
        </button>
      </form>
    </div>
  );
};

export default Deposit;
