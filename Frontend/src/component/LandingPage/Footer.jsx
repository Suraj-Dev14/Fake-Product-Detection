import React from "react";

const Footer = () => {
  return (
    <div className="w-full border-t py-6 px-10 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © 2025 AuthentiChain. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <button
            href="#"
            className="text-sm font-medium transition-colors hover:text-primary cursor-pointer"
          >
            Terms
          </button>
          <button
            href="#"
            className="text-sm font-medium transition-colors hover:text-primary cursor-pointer"
          >
            Privacy
          </button>
          <button
            href="#"
            className="text-sm font-medium transition-colors hover:text-primary cursor-pointer"
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
