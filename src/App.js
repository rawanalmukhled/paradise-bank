import { useEffect, useState } from "react";
import "./App.css";
import Login from "./pages/Login";
import Navbar from "./pages/Navbar";
import Register from "./pages/Register";
import { checkToken, login, register } from "./api/auth";
import UserContext from "./Context/UserContext";
import { Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import Transactions from "./pages/Transactions";

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
          {/* <Route path="/" Component={Home} /> */}
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
          <Route path="/profile" Component={Profile} />
          <Route path="/transactions" Component={Transactions} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
