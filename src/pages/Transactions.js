import React from "react";
import { Link } from "react-router-dom";

const Transactions = () => {
  return (
    <div>
      <h1> What would you like to do today?</h1>
      <Link to="/withdraw">
        <button>Withdraw</button>
      </Link>

      <Link to="/deposit">
        <button>Deposit</button>
      </Link>

      <Link to="/transfer">
        <button>Transfer</button>
      </Link>
    </div>
  );
};

export default Transactions;
