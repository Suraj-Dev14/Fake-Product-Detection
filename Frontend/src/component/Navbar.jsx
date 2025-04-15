import React from "react";
import { FiLogOut } from "react-icons/fi";
import { LuShield } from "react-icons/lu";

const Navbar = () => {
  const companyName = "CompanyName";

  return (
    <>
      <nav className="py-2.5 flex flex-row h-15 border-b-2 border-b-gray-200">
        <div className="w-[18%] flex flex-row justify-center items-center gap-2">
          <LuShield className="w-7 h-7" />
          <span className="self-center text-2xl font-bold">AuthentiChain</span>
        </div>
        <div className="flex flex-row justify-end items-center gap-3 px-10 w-[82%]">
          <span className="text-sm text-gray-500">{companyName}</span>
          <button className="flex justify-center items-center h-9 w-9 border-2 border-gray-400 rounded-[8px]">
            <FiLogOut className="w-4 h-4" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
