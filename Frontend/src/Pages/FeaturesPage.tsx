import { Link } from "react-router";
import {
  Shield,
  QrCode,
  BarChart,
  Zap,
  Globe,
  Smartphone,
  Clock,
  Users,
} from "lucide-react";

export function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-blue-50 to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to protect your products and build customer
            trust
          </p>
        </div>
      </section>

      {/* Main Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <QrCode className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Dynamic QR Codes
            </h3>
            <p className="text-gray-600 mb-4">
              Generate unique, tamper-proof QR codes for each product. Each code
              is cryptographically secured and linked to your product database.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Unique codes per product</li>
              <li>• Impossible to duplicate</li>
              <li>• Custom branding options</li>
            </ul>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Smartphone className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Mobile-First Verification
            </h3>
            <p className="text-gray-600 mb-4">
              Customers can verify products instantly using their smartphone
              camera. No app download required.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Works on any device</li>
              <li>• Instant verification results</li>
              <li>• Multi-language support</li>
            </ul>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <BarChart className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Real-Time Analytics
            </h3>
            <p className="text-gray-600 mb-4">
              Track verification attempts, detect counterfeit patterns, and gain
              insights into your product distribution.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Geographic tracking</li>
              <li>• Counterfeit alerts</li>
              <li>• Custom reports</li>
            </ul>
          </div>

          {/* Feature 4 */}
          <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Blockchain Security
            </h3>
            <p className="text-gray-600 mb-4">
              Immutable records stored on blockchain ensure verification data
              cannot be tampered with or forged.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Tamper-proof records</li>
              <li>• Transparent audit trail</li>
              <li>• Decentralized verification</li>
            </ul>
          </div>

          {/* Feature 5 */}
          <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Easy Integration
            </h3>
            <p className="text-gray-600 mb-4">
              Integrate with your existing systems via REST API or use our
              ready-made plugins for popular platforms.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• RESTful API</li>
              <li>• SDK libraries</li>
              <li>• Webhook support</li>
            </ul>
          </div>

          {/* Feature 6 */}
          <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-teal-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Global Coverage
            </h3>
            <p className="text-gray-600 mb-4">
              Our service works worldwide with support for multiple languages
              and currencies, perfect for international brands.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• 50+ languages</li>
              <li>• Multi-currency support</li>
              <li>• Global CDN</li>
            </ul>
          </div>

          {/* Feature 7 */}
          <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Product Lifecycle Tracking
            </h3>
            <p className="text-gray-600 mb-4">
              Track products from manufacturing to end consumer. Monitor supply
              chain integrity at every step.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Manufacturing records</li>
              <li>• Distribution tracking</li>
              <li>• Warranty management</li>
            </ul>
          </div>

          {/* Feature 8 */}
          <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-pink-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Team Collaboration
            </h3>
            <p className="text-gray-600 mb-4">
              Invite team members with role-based permissions. Collaborate
              efficiently with your quality and security teams.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• User roles & permissions</li>
              <li>• Activity logs</li>
              <li>• Team notifications</li>
            </ul>
          </div>

          {/* Feature 9 */}
          <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-yellow-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Custom Verification Pages
            </h3>
            <p className="text-gray-600 mb-4">
              Create branded verification pages that match your brand identity.
              Build trust with your customers.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Custom branding</li>
              <li>• White-label options</li>
              <li>• Custom domains</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Advanced Capabilities
            </h2>
            <p className="text-xl text-gray-600">
              Enterprise-grade features for large-scale operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Batch Operations
              </h3>
              <p className="text-gray-700 mb-4">
                Generate thousands of QR codes at once. Upload product data via
                CSV and generate codes in bulk for large product runs.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• CSV import/export</li>
                <li>• Bulk code generation</li>
                <li>• Automated workflows</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Advanced Reporting
              </h3>
              <p className="text-gray-700 mb-4">
                Generate detailed reports on verification patterns, geographic
                distribution, and counterfeit detection rates.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Custom date ranges</li>
                <li>• Export to PDF/Excel</li>
                <li>• Scheduled reports</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Alert System
              </h3>
              <p className="text-gray-700 mb-4">
                Receive instant notifications when suspicious activity is
                detected, such as multiple scans from different locations.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Email notifications</li>
                <li>• SMS alerts</li>
                <li>• Webhook integrations</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Custom Workflows
              </h3>
              <p className="text-gray-700 mb-4">
                Create custom verification workflows tailored to your business
                processes and compliance requirements.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Configurable rules</li>
                <li>• Multi-step verification</li>
                <li>• Integration with ERP</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Protect your brand and customers with our powerful verification
            platform
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/signup"
              className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors text-lg font-semibold"
            >
              Start Free Trial
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors text-lg font-semibold"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
