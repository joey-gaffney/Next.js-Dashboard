import React from "react";
import { BsPersonFill, BsThreeDotsVertical } from "react-icons/bs";
import { data } from "../data/data.js";

const customers = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex items-center justify-between p-4">
        <h2>Customers</h2>
        <h2>Welcome Back, Joey</h2>
      </div>
      <div className="p-4 ">
        <div className="w-full mx-auto p-4 border rounded-lg bg-white overlfow-y-auto">
          <div className=" my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
            <spa>Name</spa>
            <span className="sm:text-left text-right">Email</span>
            <span className="hidden md:grid">Last Order</span>
            <span className="hidden sm:grid">Method</span>
          </div>
          <ul>
            {data.map((order, id) => (
              <li
                key={id}
                className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer"
              >
                <div className="flex items-center">
                  <div className="bg-indigo-100 p-3 rounded-lg">
                    <BsPersonFill className="fill-indigo-500" />
                  </div>
                  <p className="pl-4">
                    {order.name.first + " " + order.name.last}{" "}
                  </p>
                </div>
                <p className="text-gray-600 sm:text-left text-right">
                  {order.name.first}@letsgolf.com
                </p>
                <p className="hidden md:flex">{order.date}</p>
                <div>
                  <p className="hidden sm:flex justify-between items-center">
                    {order.method}
                    <BsThreeDotsVertical />
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default customers;
