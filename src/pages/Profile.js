import { useQuery } from "@tanstack/react-query";
import React from "react";
import { login, me } from "../api/auth";
import { BASEURL } from "../api";

const Profile = () => {
  const { data } = useQuery({ queryKey: ["Profile"], queryFn: () => me() });
  console.log(data);
  return (
    <div>
      {/* {{ data }} */}

      <div class="flex items-center h-screen w-full justify-center">
        <div class="max-w-xs">
          <div class="bg-white shadow-xl rounded-lg py-3">
            <div class="photo-wrapper p-2">
              <img
                class="w-32 h-32 rounded-full mx-auto"
                src={BASEURL + "/" + data.image}
                alt="John Doe"
              />
            </div>
            <div class="p-2">
              <h3 class="text-center text-xl text-gray-900 font-medium leading-8">
                {data.username}
              </h3>

              <table class="text-xs my-3">
                <tbody>
                  <tr>
                    <td class="px-2 py-2 text-gray-500 font-semibold">
                      balance: {data.balance}
                    </td>
                    <td class="px-2 py-2"> whatever KD</td>
                  </tr>
                </tbody>
              </table>

              <div class="text-center my-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
