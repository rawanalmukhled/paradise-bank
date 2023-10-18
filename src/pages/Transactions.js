import React from "react";
import { Link } from "react-router-dom";

const Transactions = () => {
  return (
    <div>
      <div className="h-full flex flex-col items-center justify-start mt-10">
        <h1 className="text-4xl font-bold text-green-800 leading-tight mt-32">
          What would you like to do today?
        </h1>
      </div>
      <div className="flex items-center justify-center space-x-4 mt-12">
        <div className="w-1/4 bg-red-100 p-2 rounded-lg">
          <Link to="/withdraw">
            <button className="bg-white rounded-full px-6 py-3 font-bold hover:bg-green-300 focus:outline-none">
              <img
                src="https://cdn-icons-png.flaticon.com/512/6360/6360731.png"
                className="rounded-full mr-2"
              ></img>
              Withdraw
            </button>
          </Link>
        </div>

        <div className="w-1/4 bg-red-100 p-2 rounded-lg">
          <Link to="/deposite">
            <button className="bg-white rounded-full px-6 py-3 font-bold hover:bg-green-300 focus:outline-none">
              <img
                src="https://static.thenounproject.com/png/143748-200.png"
                className="rounded-full items-center justify-center"
              ></img>
              Deposit
            </button>
          </Link>
        </div>

        <div className="w-1/4 bg-red-100 p-2 rounded-lg">
          <Link to="/transfer">
            <button className="bg-white rounded-full px-6 py-3 font-bold hover:bg-green-300 focus:outline-none">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2879/2879357.png"
                className="rounded-full items-center justify-center"
              ></img>
              Transfer
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
