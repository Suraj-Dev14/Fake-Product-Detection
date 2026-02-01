import { Link } from "react-router";
import { Shield } from "lucide-react";
import { Outlet } from "react-router-dom";

export function LandingLayout() {
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

      <Outlet />

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
                <li><Link to="features" className="hover:text-white">Features</Link></li>
                <li><Link to="pricing" className="hover:text-white">Pricing</Link></li>
                <li><Link to="faq" className="hover:text-white">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="about" className="hover:text-white">About</Link></li>
                <li><Link to="blog" className="hover:text-white">Blog</Link></li>
                <li><Link to="contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="privacy" className="hover:text-white">Privacy</Link></li>
                <li><Link to="terms" className="hover:text-white">Terms</Link></li>
                <li><Link to="security" className="hover:text-white">Security</Link></li>
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
