import React from "react";

const TopCards = () => {
  return (
    <div className="grid lg:grid-cols-5 gap-4 p-4">
      <div className="col-span-1 lg:col-span-2  bg-white flex justify-between w-full p-4 border rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold">$6,752</p>
          <p>Dialy Revenue</p>
        </div>
        <p className="bg-emerald-200 flex items-center p-2 rounded-lg text-emerald-700 text-lg font-bold">
          <span>+12%</span>
        </p>
      </div>
      <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full p-4 border rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold">$10,432.110</p>
          <p>YTD</p>
        </div>
        <p className="bg-emerald-200 flex items-center p-2 rounded-lg text-emerald-700 text-lg font-bold">
          <span>+17%</span>
        </p>
      </div>
      <div className="bg-white flex justify-between w-full border p-4 rounded-lg">
        <div>
          <p className="text-2xl font-bold">486</p>
          <p>Customers</p>
        </div>
        <p className="bg-emerald-200 flex items-center p-2 rounded-lg text-emerald-700 text-lg font-bold">
          <span>+8%</span>
        </p>
      </div>
    </div>
  );
};

export default TopCards;
