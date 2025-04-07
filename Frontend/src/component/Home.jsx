import React from "react";

function Home() {
  return (
    <>
      <div id="home" className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-10">
          <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center gap-1">
              <img src="./Shield.png" className="h-8 w-8" />
              <span className="text-xl font-bold">AuthentiChain</span>
            </div>
            <nav className="hidden md:flex gap-6">
              <button
                className="text-sm font-medium transition-colors hover:text-primary cursor-pointer"
              >
                <a href="#home">Home</a>
              </button>
              <button
                className="text-sm font-medium transition-colors hover:text-primary cursor-pointer"
              >
                <a href="#features">Features</a>
              </button>
              <button
                className="text-sm font-medium transition-colors hover:text-primary cursor-pointer"
              >
                <a href="#how-it-works">How It Works</a>
              </button>
              <button
                className="text-sm font-medium transition-colors hover:text-primary cursor-pointer"
              >
                <a href="#about">About</a>
              </button>
            </nav>
            <div className="flex items-center gap-4">
              <button
                href="/scan"
                className="w-[150px] hidden border-2 border-[#e3e3e3] hover:bg-[#e3e3e3] p-2 rounded-[8px] md:block bg-white cursor-pointer"
              >
                <div className="flex justify-center items-center gap-2">
                  <img src="./QR-code-image.png" className="h-7 w-7" />
                  Scan Product
                </div>
              </button>
              <button
                href="/login"
                className="w-[150px] hidden border-2 border-[#000000] p-2 rounded-[8px] md:block bg-black text-white cursor-pointer"
              >
                Company Login
              </button>
            </div>
          </div>
        </header>
        <main className="flex-1">
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
                    <button
                      href="/scan"
                      className="w-[150px] hidden border-2 border-[#e3e3e3] hover:bg-[#e3e3e3] p-2 rounded-[8px] md:block bg-white cursor-pointer"
                    >
                      <div className="flex justify-center items-center gap-2">
                        <img src="./QR-code-image.png" className="h-7 w-7" />
                        Scan Product
                      </div>
                    </button>
                    <button
                      href="/login"
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
                        <img src="./QR-code-image.png" className="h-50 w-50 m-0" />
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
                <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                  <div className="rounded-full bg-[#e6e6e6] p-3">
                  <img src="./Shield.png" className="h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-bold">Tamper-Proof</h3>
                  <p className="text-center text-muted-foreground">
                    Blockchain technology ensures product data cannot be altered
                    or falsified
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                  <div className="rounded-full bg-[#e6e6e6] p-3">
                  <img src="./QR-code-image.png" className="h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-bold">Instant Verification</h3>
                  <p className="text-center text-muted-foreground">
                    Scan and verify products in seconds with our easy-to-use QR
                    scanner
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                  <div className="rounded-full bg-[#e6e6e6] p-3">
                  <img src="./Check.png" className="h-10 w-10"/>
                  </div>
                  <h3 className="text-xl font-bold">Supply Chain Tracking</h3>
                  <p className="text-center text-muted-foreground">
                    Track products from manufacturing to retail with complete
                    transparency
                  </p>
                </div>
              </div>
            </div>
          </section>

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
                <div className="flex flex-col items-center space-y-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black text-white">
                    1
                  </div>
                  <h3 className="text-xl font-bold">
                    Companies Register Products
                  </h3>
                  <p className="text-center text-muted-foreground">
                    Manufacturers add product details to the blockchain through
                    our secure portal
                  </p>
                  {/* <ArrowRight className="h-8 w-8 rotate-90 md:rotate-0 text-muted-foreground" /> */}
                </div>
                <div className="flex flex-col items-center space-y-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black text-white">
                    2
                  </div>
                  <h3 className="text-xl font-bold">QR Codes Generated</h3>
                  <p className="text-center text-muted-foreground">
                    Unique QR codes are created and buttoned to blockchain
                    records for each product
                  </p>
                  {/* <ArrowRight className="h-8 w-8 rotate-90 md:rotate-0 text-muted-foreground" /> */}
                </div>
                <div className="flex flex-col items-center space-y-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black text-white">
                    3
                  </div>
                  <h3 className="text-xl font-bold">
                    Consumers Verify Products
                  </h3>
                  <p className="text-center text-muted-foreground">
                    Users scan QR codes to instantly check product authenticity
                    against blockchain records
                  </p>
                </div>
              </div>
            </div>
          </section>

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
                  <button
                    href="/scan"
                    className="w-[175px] hidden border-2 border-[#e3e3e3] hover:bg-[#e3e3e3] p-2 rounded-[8px] md:block bg-white cursor-pointer"
                  >
                    <div className="flex justify-center items-center gap-2">
                      <img src="./QR-code-image.png" className="h-7 w-7" />
                      Scan Product
                    </div>
                  </button>
                  <button
                    href="/login"
                    className="w-[175px] hidden border-2 border-[#000000] p-2 rounded-[8px] md:block bg-black text-white cursor-pointer"
                  >
                    Company Login
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="w-full border-t py-6 px-10 md:py-0">
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
        </footer>
      </div>
    </>
  );
}

export default Home;
