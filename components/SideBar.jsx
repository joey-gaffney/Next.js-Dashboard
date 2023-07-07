import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { AiOutlineUser, AiOutlineShopping } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";

const SideBar = ({ children }) => {
  return (
    <div className="flex">
      <div className="fixed w-20 h-screen p-4 bg-indigo-400 border-r flex flex-col justify-between">
        <div className="flex flex-col items-center">
          <Link href="/">
            <div className=" bg-indigo-500 text-white p-3 rounded-full cursor-pointer">
              <FaHome size={20} />
            </div>
          </Link>
          <span className="border-b-[.5px] border-black w-full p-2"></span>
          <div className=" flex flex-col gap-4 mt-4">
            <Link href="/">
              <div className="icon bg-slate-50 p-3 rounded-lg hover:shadow-lg cursor-pointer ">
                <RxDashboard size={20} className="" />
              </div>
            </Link>
            <Link href="/customers">
              <div className="icon bg-slate-50 p-3 rounded-lg hover:shadow-lg cursor-pointer">
                <AiOutlineUser size={20} />
              </div>
            </Link>
            <Link href="/orders">
              <div className="icon bg-slate-50 p-3 rounded-lg hover:shadow-lg cursor-pointer">
                <AiOutlineShopping size={20} />
              </div>
            </Link>
            <Link href="/">
              <div className="icon bg-slate-50 p-3 rounded-lg hover:shadow-lg cursor-pointer">
                <FiSettings size={20} />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <main className="ml-20 w-full">{children}</main>
    </div>
  );
};

export default SideBar;
