import { Link } from "react-router";
import { Shield, QrCode, CheckCircle, AlertTriangle } from "lucide-react";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Shield className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">VerifyGuard</span>
            </div>
            <nav className="flex items-center gap-4">
              <Link 
                to="/login" 
                className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                Login
              </Link>
              <Link 
                to="/signup" 
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Sign Up
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Protect Your Brand from Counterfeit Products
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Advanced QR code technology to verify product authenticity instantly. 
              Safeguard your customers and your reputation with our cutting-edge 
              fake product detection system.
            </p>
            <div className="flex gap-4">
              <Link 
                to="/signup" 
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg"
              >
                Get Started
              </Link>
              <button className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors text-lg">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1635514569146-9a9607ecf303?w=800&q=80"
              alt="QR Code Scanning"
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Three simple steps to verify product authenticity
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <QrCode className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Scan QR Code</h3>
              <p className="text-gray-600">
                Simply scan the unique QR code on your product using your smartphone camera.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Instant Verification</h3>
              <p className="text-gray-600">
                Our system instantly verifies the product against our secure database.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Get Results</h3>
              <p className="text-gray-600">
                Receive immediate confirmation if the product is authentic or counterfeit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose VerifyGuard?
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Blockchain Security</h4>
                    <p className="text-gray-600">Tamper-proof verification using blockchain technology</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Real-Time Analytics</h4>
                    <p className="text-gray-600">Track verification attempts and detect counterfeit patterns</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Easy Integration</h4>
                    <p className="text-gray-600">Seamlessly integrate with your existing production line</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Customer Trust</h4>
                    <p className="text-gray-600">Build confidence and loyalty with verified authenticity</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-linear-to-br from-blue-50 to-purple-50 p-8 rounded-lg">
              <div className="text-center">
                <AlertTriangle className="w-16 h-16 text-orange-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Counterfeit Crisis
                </h3>
                <p className="text-gray-700 mb-6">
                  The global counterfeit market costs businesses over $500 billion annually. 
                  Protect your brand and customers today.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600">99.9%</div>
                    <div className="text-sm text-gray-600">Accuracy Rate</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600">10M+</div>
                    <div className="text-sm text-gray-600">Products Verified</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Protect Your Products?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of brands using VerifyGuard to fight counterfeiting
          </p>
          <Link 
            to="/signup" 
            className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors text-lg font-semibold"
          >
            Start Free Trial
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-6 h-6 text-blue-400" />
                <span className="text-xl font-bold">VerifyGuard</span>
              </div>
              <p className="text-gray-400">
                Protecting brands and consumers from counterfeit products.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
                <li><a href="#" className="hover:text-white">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 VerifyGuard. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
