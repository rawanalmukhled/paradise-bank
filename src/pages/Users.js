import React from "react";
import { getAllUsers } from "../api/auth";
import { useQuery } from "@tanstack/react-query";

const Users = () => {
  const { data } = useQuery({
    queryKey: ["Users"],
    queryFn: () => getAllUsers(),
  });
  console.log(data);

  return (
    <div>
      <div className="p-4 shadow-lg rounded-md bg-white w-60 h-80 m-4">
        <img
          src={data.image}
          alt={data.name}
          className="rounded-full w-24 h-24 mx-auto mt-4"
        />
        <h2 className="text-xl text-center mt-4">{data.name}</h2>
        <p className="text-center text-gray-600 mt-2">ID: {data.id}</p>
        <p className="text-center mt-10 text-lg font-semibold">
          Balance: ${data.balance}
        </p>
      </div>
    </div>
  );
};

export default Users;
