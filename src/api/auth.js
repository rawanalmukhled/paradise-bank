import { instance } from ".";
import jwtDecode from "jwt-decode";
import jwt_decode from "jwt-decode";

const login = async (userInfo) => {
  const { data } = await instance.post(
    "/mini-project/api/auth/login",
    userInfo
  );
  storeToken(data.token);
  return data;
};
const register = async (userInfo) => {
  const formData = new FormData();
  for (const key in userInfo) formData.append(key, userInfo[key]);
  const { data } = await instance.post(
    "/mini-project/api/auth/register",
    formData
  );
  storeToken(data.token);
  return data;
};

const me = async () => {
  const { data } = await instance.get("/mini-project/api/auth/me");
  return data;
};

const storeToken = (token) => {
  localStorage.setItem("token", token);
};

const getAllUsers = async () => {
  const { data } = await instance.get("/mini-project/api/auth/users");
  return data;
};

const getUserById = async () => {
  const { data } = await instance.get("/mini-project/api/auth/user/<userId>");
  return data;
};

const updateProfile = async (image) => {
  const { data } = await instance.put("/mini-project/api/auth/profile", image);
  return data;
};

const deposit = async (amount) => {
  const { data } = await instance.put(
    "/mini-project/api/transactions/deposit",
    amount
  );
  return data;
};

const withdraw = async (amount) => {
  // consider if statement

  const { data } = await instance.put(
    "/mini-project/api/transactions/withdraw",
    amount
  );
  return data;
};

// consider if statement

const transfer = async (amount, username) => {
  // consider if statement

  const { data } = await instance.put(
    "/mini-project/api/transactions/transfer/<username>",
    amount,
    username
  );
  return data;
};

const checkToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    const decode = jwt_decode(token);
    const cureentTime = Date.now() / 1000;
    if (decode.exp < cureentTime) {
      localStorage.removeItem("token");
      return false;
    }
    return true;
  }
  return false;
};

const logout = () => {
  localStorage.removeItem("token");
};

export {
  login,
  register,
  storeToken,
  getAllUsers,
  getUserById,
  updateProfile,
  deposit,
  withdraw,
  transfer,
  checkToken,
  logout,
  me,
};
