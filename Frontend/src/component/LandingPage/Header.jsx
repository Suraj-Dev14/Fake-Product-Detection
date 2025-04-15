import React from "react";
import { LuShield, LuQrCode } from "react-icons/lu";

const Header = ({ handleLoginButton }) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-10">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-1">
          <LuShield className="w-6 h-6" />
          <span className="text-xl font-bold">AuthentiChain</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <button className="text-sm font-medium transition-colors hover:text-primary cursor-pointer">
            <a href="#home">Home</a>
          </button>
          <button className="text-sm font-medium transition-colors hover:text-primary cursor-pointer">
            <a href="#features">Features</a>
          </button>
          <button className="text-sm font-medium transition-colors hover:text-primary cursor-pointer">
            <a href="#how-it-works">How It Works</a>
          </button>
          <button className="text-sm font-medium transition-colors hover:text-primary cursor-pointer">
            <a href="#about">About</a>
          </button>
        </nav>
        <div className="flex items-center gap-4">
          <button className="w-[150px] hidden border-2 border-[#e3e3e3] hover:bg-[#e3e3e3] p-2 rounded-[8px] md:block bg-white cursor-pointer">
            <div className="flex justify-center items-center gap-2">
              <LuQrCode className="w-4 h-4" />
              Scan Product
            </div>
          </button>
          <button
            onClick={handleLoginButton}
            className="w-[150px] hidden border-2 border-[#000000] p-2 rounded-[8px] md:block bg-black text-white cursor-pointer"
          >
            Company Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
