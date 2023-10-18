import { useEffect, useState } from "react";
import "./App.css";
import Login from "./pages/Login";
import Navbar from "./pages/Navbar";
import Register from "./pages/Register";
import { checkToken, login, register, transfer, withdraw } from "./api/auth";
import UserContext from "./Context/UserContext";
import { Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import Transactions from "./pages/Transactions";
import Home from "./pages/Home";
import Deposit from "./Modal/Deposit";
import Withdraw from "./Modal/Withdraw";
import Transfer from "./Modal/Transfer";
import Users from "./pages/Users";

function App() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    setUser(checkToken());
  }, []);

  return (
    <UserContext.Provider value={[user, setUser]}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
          {/* <Route path="/profile" Component={Profile} /> */}
          <Route path="/transactions" Component={Transactions} />
          <Route path="/deposite" Component={Deposit} />
          <Route path="/transfer" Component={Transfer} />
          <Route path="/withdraw" Component={Withdraw} />
          {/* <Route path="/users" Component={Users} /> */}
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
