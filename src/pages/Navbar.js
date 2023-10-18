import React from "react";
import { Link, NavLink } from "react-router-dom";
import UserContext from "../Context/UserContext";
import { useContext } from "react";
import { logout } from "../api/auth";
import { register } from "../api/auth";
import { login } from "../api/auth";
import Profile from "./Profile";

const Navbar = () => {
  const [user, setUser] = useContext(UserContext);
  const handleLogout = () => {
    logout();
    setUser(false);
  };

  return (
    <nav className="bg-red-400	">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/">
              <span className="font-semibold text-xl text-white">
                Paradise Bank༝ ˚ ｡⋆ 𓇼 ⋆｡ ˚ ༝
              </span>
            </Link>
          </div>
          <div className="block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink
                to="/"
                className="text-white hover:bg-gray-200 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </NavLink>

              <NavLink
                to="/users"
                className="text-white hover:bg-gray-200 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Users
              </NavLink>

              {user ? (
                <>
                  <Link to="/transactions">
                    <button className="text-white hover:bg-gray-200 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">
                      Transactions
                    </button>
                  </Link>
                  <Link to="/profile">
                    <button className="text-white hover:bg-gray-200 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">
                      Profile
                    </button>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="text-white hover:bg-gray-200 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <NavLink
                    to="/login"
                    className="text-white hover:bg-gray-200 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to="/register"
                    className="text-white hover:bg-gray-200 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Register
                  </NavLink>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
