import { Link } from "react-router";
import { Home, Search } from "lucide-react";

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* 404 Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-5">
        <div className="max-w-2xl w-full text-center">
          {/* Icon */}
          <div className="mb-4">
            <div className="w-24 h-24 bg-linear-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto">
              <Search className="w-12 h-12 text-blue-600" />
            </div>
          </div>

          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-9xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              404
            </h1>
          </div>

          {/* Message */}
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Oops! The page you're looking for doesn't exist. It might have been
            moved or deleted.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-lg font-semibold"
            >
              Contact Support
            </Link>
          </div>

          {/* Helpful Links */}
          <div className="bg-linear-to-br from-blue-50 to-purple-50 rounded-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Here are some helpful links instead:
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link
                to="/features"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Features
              </Link>
              <Link
                to="/about"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                About Us
              </Link>
              <Link
                to="/faq"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                FAQ
              </Link>
              <Link
                to="/contact"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Contact
              </Link>
              <Link
                to="/login"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Sign Up
              </Link>
              <Link
                to="/privacy"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Privacy
              </Link>
              <Link
                to="/security"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Security
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
