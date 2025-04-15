import React from "react";
import { useNavigate } from "react-router-dom";
import { LuQrCode } from "react-icons/lu";
import FeatureCard from "./FeatureCard";
import StepCard from "./StepCard";
import Header from "./Header";
import { How_it_work, feature } from "./StaticData";
import Footer from "./Footer";

function LandingPage() {
  const navigate = useNavigate();

  const handleLoginButton = () => {
    navigate("/login");
  };

  return (
    <>
      <div id="home" className="flex min-h-screen flex-col">
        {/* Header */}
        <Header handleLoginButton={handleLoginButton} />

        <main className="flex-1">
          {/* Home Section */}
          <section className="w-full py-20 bg-gradient-to-b from-background to-muted px-10">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="flex flex-col justify-center w-[500px] space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                      Verify Product Authenticity with Blockchain
                    </h1>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                      Our blockchain-powered QR verification system helps
                      consumers identify genuine products and protects brands
                      from counterfeiting.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <button className="w-[150px] hidden border-2 border-[#e3e3e3] hover:bg-[#e3e3e3] p-2 rounded-[8px] md:block bg-white cursor-pointer">
                      <div className="flex justify-center items-center gap-2">
                        <LuQrCode className="w-5 h-5" />
                        Scan Product
                      </div>
                    </button>
                    <button
                      onClick={handleLoginButton}
                      className="w-[150px] hidden border-2 border-[#000000] p-2 rounded-[8px] md:block bg-black text-white cursor-pointer"
                    >
                      Company Portal
                    </button>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="relative w-full max-w-[500px] aspect-square">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg opacity-20 blur-xl"></div>
                    <div className="relative bg-[#ffffff] rounded-lg shadow-lg p-6 h-full flex items-center justify-center">
                      <div className="text-center flex items-center flex-col space-y-4">
                        <LuQrCode className="w-35 h-35" />
                        <h3 className="text-xl font-bold">Scan to Verify</h3>
                        <p className="text-muted-foreground">
                          Simply scan the QR code on any product to instantly
                          verify its authenticity
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Key Features
                  </h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Our blockchain-based solution offers unparalleled security
                    and transparency
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
                {feature.map((item) => (
                  <ul key={Math.random()}>
                    <FeatureCard
                      icon={item.icon}
                      title={item.title}
                      description={item.description}
                    />
                  </ul>
                ))}
              </div>
            </div>
          </section>

          {/* How it work Section */}
          <section
            id="how-it-works"
            className="w-full bg-[#f5f5f5] py-12 md:py-24 lg:py-32 bg-muted"
          >
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    How It Works
                  </h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Our system combines QR codes with blockchain for foolproof
                    product verification
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mt-12">
                {How_it_work.map((item) => (
                  <ul key={item.step}>
                    <StepCard
                      step={item.step}
                      title={item.title}
                      description={item.description}
                    />
                  </ul>
                ))}
              </div>
            </div>
          </section>

          {/* Get Ready Section */}
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Ready to Get Started?
                  </h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Join the fight against counterfeit products today
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <button className="w-[175px] hidden border-2 border-[#e3e3e3] hover:bg-[#e3e3e3] p-2 rounded-[8px] md:block bg-white cursor-pointer">
                    <div className="flex justify-center items-center gap-2">
                      <LuQrCode className="w-5 h-5" />
                      Scan Product
                    </div>
                  </button>
                  <button
                    onClick={handleLoginButton}
                    className="w-[175px] hidden border-2 border-[#000000] p-2 rounded-[8px] md:block bg-black text-white cursor-pointer"
                  >
                    Company Login
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/*Footer Component*/}
        <Footer />
      </div>
    </>
  );
}

export default LandingPage;
