import React from "react";
import { useState } from "react";

function Login() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return (
    <>
      <div className="flex h-screen w-[100%] flex-col items-center justify-center">
        <button
          href="/"
          className="absolute left-10 top-10 flex items-center py-2 px-4 cursor-pointer hover:bg-gray-100
        rounded-lg text-sm font-semibold"
        >
          <img className="mr-2 mt-0.5 h-3 w-3" src="./LeftArrow.png" />
          Back
        </button>

        <div className="mx-auto flex w-full flex-col justify-center space-y-6 gap-2 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <div className="flex justify-center">
              <img className="w-[50px]" src="/Shield.png" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight">Company Login</h1>
            <p className="px-5 text-[#c] text-sm text-muted-foreground">
              Enter your credentials to access the company dashboard
            </p>
          </div>

          <div className="border-2 rounded-2xl border-gray-200 py-8 px-6">
            <div className="flex flex-col gap-2">
              <div className="text-xl font-semibold tracking-tight">
                Sign In
              </div>
              <div className="pr-4 text-[#6e6e6e] text-sm text-muted-foreground">
                Access your company portal to manage products
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4 mt-4">
                <div className="flex flex-col space-y-2">
                  <label className="text-sm font-bold" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="border-1 p-2 rounded-[4px] border-gray-300"
                    id="email"
                    type="email"
                    placeholder="company@example.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-bold" htmlFor="password">
                      Password
                    </label>
                    <button
                      href="#"
                      className="text-xs text-primary hover:underline cursor-pointer"
                    >
                      Forgot password?
                    </button>
                  </div>
                  <input
                    className="border-1 w-[100%] p-2 rounded-[4px] border-gray-300"
                    id="password"
                    type="password"
                    required
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className={`w-full ${isLoading ? "bg-gray-700":"bg-black"} text-white rounded-[7px] p-2 mt-4 cursor-pointer`}
                  disabled={isLoading}
                >
                  {isLoading ? "Signing in..." : "Sign In"}
                </button>
              </div>
            </form>
          </div>

          <p className="px-8 text-center text-[#6e6e6e] text-[14px] text-muted-foreground">
            Don't have an account?{" "}
            <button
              href="#"
              className="underline underline-offset-4 hover:text-primary cursor-pointer"
            >
              Contact us
            </button>{" "}
            to register your company.
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
